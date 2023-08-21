import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { AppText } from "../components/AppText";
import { AppIconButton } from "../components/AppIconButton";

import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { capitalizeString } from "../helpers/capitalizeString";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const AppHeader = ({ headerShown, iconRight }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const isAndroid = Platform.OS === "android";

  return (
    <SafeAreaView
      style={{
        paddingTop: isAndroid ? STATUS_BAR_HEIGHT : 0,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 0.2,
          alignItems: "flex-start",
          paddingLeft: 4,
        }}
      >
        <AppIconButton
          icon={<Feather name="menu" size={24} color={colors.text} />}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          alignItems: isAndroid ? null : "center",
          justifyContent: "center",
        }}
      >
        {headerShown && (
          <AppText fontSize={22} fontWeight={600}>
            {capitalizeString(route.name)}
          </AppText>
        )}
      </View>
      <View style={{ flex: 0.2, alignItems: "flex-end", paddingRight: 4 }}>
        {iconRight && iconRight}
      </View>
    </SafeAreaView>
  );
};
