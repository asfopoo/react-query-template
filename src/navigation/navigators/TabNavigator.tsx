import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../../screens/SettingsScreen';
import { COLORS } from '../../theme/colors';
import ChatStack from '../stacks/privateStacks/ChatStack';
import CountStack from '../stacks/privateStacks/CountStack';
import ScannerStack from '../stacks/privateStacks/ScannerStack';

export function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.RED,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BLACK,
          borderTopColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Count" component={CountStack} />
      <Tab.Screen name="Scan" component={ScannerStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
