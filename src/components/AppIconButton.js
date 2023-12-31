import { TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AppText } from "./AppText";

const SIZE = 48;

export const AppIconButton = ({
  icon,
  onPress,
  filled,
  noBorder,
  disabled,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: filled
          ? disabled
            ? colors.border
            : colors.card
          : colors.background,
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: filled ? (noBorder ? 0 : 0.5) : 0,
        borderColor: colors.border,
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
    </TouchableOpacity>
  );
};
