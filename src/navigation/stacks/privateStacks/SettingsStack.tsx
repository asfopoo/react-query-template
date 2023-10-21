import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../../../screens/ScannerScreen';

const SettingsStackNavigator = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
}
