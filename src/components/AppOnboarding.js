import { useTheme } from "@react-navigation/native";
import { useAtom } from "jotai";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { categoriesAtom, isOnboardingAtom } from "../state/globalStates";
import { AppText } from "./AppText";
import { CategoryChooser } from "./CategoryChooser";
import { AppButton } from "./AppButton";
import { AppSeparator } from "./AppSeparator";

export const AppOnboarding = () => {
  const { colors } = useTheme();
  const [isOnboarding, setIsOnBoarding] = useAtom(isOnboardingAtom);
  const [categories, setCategories] = useAtom(categoriesAtom);
  const isNoCategoriesSelected = categories.length === 0;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{ height: 90, width: 90 }}
          />
        </View>
        <CategoryChooser />
        <View style={{ paddingTop: 8 }}>
          <AppButton
            title="Done"
            onPress={() => setIsOnBoarding(false)}
            disabled={isNoCategoriesSelected}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
