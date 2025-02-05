import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { OpenSansCondensed_300Light } from "@expo-google-fonts/open-sans-condensed";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Stack } from "expo-router";
import { Loading } from "@/components/ui/Loading";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    BebasNeue_400Regular,
    OpenSansCondensed_300Light,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </QueryClientProvider>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
