import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { StackParamList } from "../../App";
import { Button, Header, Textbox } from "../components";
import { COLORS } from "../constants/theme";
import { useContext, useState } from "react";
import { LOGIN, PASSWORD } from "../constants/app";
import ScreenContext from "../../ScreenContext";

type Props = NativeStackScreenProps<StackParamList, "Auth">;

const Auth = ({ navigation }: Props) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginErrorMsg, setLoginErrorMsg] = useState<string>("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>("");

  const { isTablet } = useContext(ScreenContext);

  const auth = () => {
    if (login === LOGIN && password === PASSWORD) {
      navigation.navigate("Posts");
      reset();
    } else if (!login && !password) {
      setLoginErrorMsg("Логин не введен!");
      setPasswordErrorMsg("Пароль не введен!");
    } else if (login !== LOGIN) {
      setPasswordErrorMsg("");
      setLoginErrorMsg("Введен неверный логин!");
    } else {
      setLoginErrorMsg("");
      setPasswordErrorMsg("Введен неверный пароль!");
    }
  };

  const reset = () => {
    setLogin("");
    setPassword("");
    setLoginErrorMsg("");
    setPasswordErrorMsg("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showLogoutButton={false} />
      <View style={[styles.formContainer, isTablet && { flex: 1 }]}>
        <View style={styles.form}>
          <Text style={styles.title}>Autorization</Text>
          <Textbox
            label="login"
            value={login}
            onChangeText={setLogin}
            errorMessage={loginErrorMsg}
          />
          <Textbox
            label="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            returnKeyType="done"
            containerStyle={{ marginTop: 32, marginBottom: 16 }}
            errorMessage={passwordErrorMsg}
          />
          <Button title="Submit" onPress={auth} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 18,
    paddingVertical: 48,
  },
  formContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    borderWidth: 4,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 45,
  },
});

export default Auth;
