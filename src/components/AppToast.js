import { View } from "react-native";

import { AppDarkTheme } from "../styles/theme";
import { useTheme } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import Toast, { BaseToast } from "react-native-toast-message";

export const AppToast = () => {
  const { colors } = useTheme();

  const textColor = AppDarkTheme.colors.text;

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.success,
          backgroundColor: colors.success,
          width: "92%",
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          backgroundColor: colors.success,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: 600,
          color: textColor,
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: 400,
          color: textColor,
        }}
        renderTrailingIcon={() => (
          <View
            style={{
              backgroundColor: colors.success,
              alignItems: "center",
              justifyContent: "center",
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              paddingRight: 16,
            }}
          >
            <Feather name="check-circle" size={24} color={textColor} />
          </View>
        )}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.danger,
          width: "92%",
          backgroundColor: colors.background,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          backgroundColor: colors.danger,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: 600,
          color: textColor,
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: 400,
          color: textColor,
        }}
        renderTrailingIcon={() => (
          <View
            style={{
              backgroundColor: colors.danger,
              alignItems: "center",
              justifyContent: "center",
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              paddingRight: 16,
            }}
          >
            <Feather name="x-circle" size={24} color={textColor} />
          </View>
        )}
      />
    ),
    info: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.info,
          width: "92%",
          backgroundColor: colors.info,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          backgroundColor: colors.info,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: 600,
          color: textColor,
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: 400,
          color: textColor,
        }}
        renderTrailingIcon={() => (
          <View
            style={{
              backgroundColor: colors.info,
              alignItems: "center",
              justifyContent: "center",
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              paddingRight: 16,
            }}
          >
            <Feather name="info" size={24} color={textColor} />
          </View>
        )}
      />
    ),
  };

  return (
    <Toast
      position="bottom"
      //   bottomOffset={insets.bottom}
      config={toastConfig}
    />
  );
};
