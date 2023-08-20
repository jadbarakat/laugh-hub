import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { shadow } from "../styles/shadow";
import { useAtom } from "jotai";
import { themeAtom } from "../state/globalStates";

export const AppCard = ({ children, big }) => {
  const [theme] = useAtom(themeAtom);
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.card,
          minHeight: big ? 200 : null,
          borderRadius: 8,
          justifyContent: "center",
          borderWidth: 1,
          borderColor: colors.border,
          paddingVertical: 24,
          paddingHorizontal: 24,
          marginBottom: 16,
        },
        theme === "light" ? shadow : null,
      ]}
    >
      {children}
    </View>
  );
};
