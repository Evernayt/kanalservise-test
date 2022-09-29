import { useNavigation } from "@react-navigation/native";
import { FC, useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import ScreenContext from "../../ScreenContext";
import { ICONS, IMAGES } from "../constants";
import { COLORS, SIZES } from "../constants/theme";
import IconButton from "./UI/IconButton";

interface HeaderProps {
  showLogoutButton?: boolean;
}

const Header: FC<HeaderProps> = ({ showLogoutButton = true }) => {
  const navigation = useNavigation<any>();

  const logout = () => {
    navigation.navigate("Auth");
  };

  const { isTablet } = useContext(ScreenContext);

  return (
    <View style={styles.container}>
      <Image
        source={isTablet ? IMAGES.logoFull : IMAGES.logo}
        style={isTablet ? styles.logoTablet : styles.logoMobile}
      />
      {showLogoutButton && <IconButton icon={ICONS.exit} onPress={logout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.headerHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 36,
    backgroundColor: COLORS.primary,
  },
  logoTablet: {
    height: 63,
    width: 273,
  },
  logoMobile: {
    height: 63,
    width: 63,
  },
});

export default Header;
