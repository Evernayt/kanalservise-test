import { FC, useContext } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import ScreenContext from "../../../ScreenContext";
import { COLORS } from "../../constants/theme";

interface TextboxProps extends TextInputProps {
  label: string;
  labelWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
}

const Textbox: FC<TextboxProps> = ({
  label,
  labelWidth = 120,
  containerStyle,
  errorMessage,
  ...props
}) => {
  const { isTablet } = useContext(ScreenContext);
  return (
    <View style={containerStyle}>
      <View style={isTablet ? styles.containerTablet : styles.containerMobile}>
        <Text
          style={[
            isTablet ? styles.labelTablet : styles.labelMobile,
            { width: labelWidth },
          ]}
        >
          {label}
        </Text>
        <TextInput style={styles.input} {...props} />
      </View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTablet: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerMobile: {
    flexDirection: "column",
  },
  labelTablet: {
    fontSize: 24,
    fontWeight: "800",
    marginRight: 28,
  },
  labelMobile: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 12,
  },
  input: {
    borderWidth: 4,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.secondaryDeemphasized,
    borderRadius: 10,
    height: 45,
    fontSize: 18,
    flex: 1,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default Textbox;
