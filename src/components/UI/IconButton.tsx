import { FC, ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/theme";

interface IconButtonProps extends TouchableOpacityProps {
  icon: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    width: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default IconButton;
