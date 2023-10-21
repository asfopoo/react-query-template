import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScannerScreen from '../../../screens/ScannerScreen';

const ScannerStackNavigator = createNativeStackNavigator();

export default function ScannerStack() {
  return (
    <ScannerStackNavigator.Navigator>
      <ScannerStackNavigator.Screen
        name="ScannerScreen"
        component={ScannerScreen}
      />
    </ScannerStackNavigator.Navigator>
  );
}
