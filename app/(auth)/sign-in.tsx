import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link
        href="/(auth)/sign-in">
        <Text className="text-black">Create Account</Text>
      </Link>
    </View>
  );
};

export default SignIn;
