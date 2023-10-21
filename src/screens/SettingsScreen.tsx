import { View, Text } from 'react-native';

import { useAuth } from '../hooks/useAuth';

export default function SettingsScreen() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Text onPress={handleSignOut}>Sign out</Text>
    </View>
  );
}
