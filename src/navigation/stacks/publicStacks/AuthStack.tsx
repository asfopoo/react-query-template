import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../../screens/LoginScreen';

const AuthStackNavigator = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStackNavigator.Navigator>
  );
}
