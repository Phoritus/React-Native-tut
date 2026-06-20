import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 px-4 py-2 bg-primary rounded">
        <Text className="text-white">Go to Onboarding</Text>
      </Link>

      <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 bg-primary rounded">
        <Text className="text-white">Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 px-4 py-2 bg-primary rounded">
        <Text className="text-white">Sign Up</Text>
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription (Static)</Link>
      <Link
        href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" },
        }}
      >
        Claude Subscription (Dynamic)
      </Link>
    </SafeAreaView>
  );
}
