import { View, Text } from 'react-native';

import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Text onPress={handleLogin}>Login</Text>
    </View>
  );
}
