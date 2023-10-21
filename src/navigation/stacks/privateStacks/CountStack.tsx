import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountScreen from '../../../screens/CountScreen';

const CountStackNavigator = createNativeStackNavigator();

export default function CountStack() {
  return (
    <CountStackNavigator.Navigator>
      <CountStackNavigator.Screen name="CountScreen" component={CountScreen} />
    </CountStackNavigator.Navigator>
  );
}
