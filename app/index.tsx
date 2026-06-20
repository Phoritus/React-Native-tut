import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}
