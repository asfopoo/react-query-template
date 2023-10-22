import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScannerScreen from '../../../screens/ScannerScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { ScannerStackParamList } from '../../types';

const ScannerStackNavigator =
  createNativeStackNavigator<ScannerStackParamList>();

export default function ScannerStack() {
  return (
    <ScannerStackNavigator.Navigator>
      <ScannerStackNavigator.Screen
        name={PRIVATE_ROUTES.SCANNER_SCREEN}
        component={ScannerScreen}
      />
    </ScannerStackNavigator.Navigator>
  );
}
