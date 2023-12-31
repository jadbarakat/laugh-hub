import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useAtom } from "jotai";
import { isDarkAtom } from "../state/globalStates";

export const AppTheme = (tint) => {
  const [isDark] = useAtom(isDarkAtom);

  const AppLightTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: tint.color,
      background: "#FFF",
      card: "#F1F2F4",
      border: "#DCDFE4",
      text: "#161A1D",
      success: "#22A06B",
      danger: "#CA3521",
      warning: "#CF9F02",
      info: "#1D9AAA",
      orange: "#D97008",
      disabled: "#758195",
      white: "#FFF",
      drawerText: "rgba(51, 51, 51, 0.68)",
    },
  };

  const AppDarkTheme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: tint.color,
      background: "#1D2125",
      card: "#2C333A",
      border: "#22272B",
      text: "#DEE4EA",
      success: "#216E4E",
      danger: "#AE2A19",
      warning: "#B38600",
      info: "#206B74",
      orange: "#974F0C",
      disabled: "#596773",
      white: "#FFF",
      yellow: "#DB9B06",
      drawerText: "rgba(228, 235, 241, 0.68)",
    },
  };

  return isDark ? AppDarkTheme : AppLightTheme;
};
