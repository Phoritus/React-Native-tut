import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link
        href="/(auth)/sign-up">
        <Text className="text-black">Sign Up</Text>
      </Link>
    </View>
  );
};

export default SignUp;
