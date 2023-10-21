import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contextProviders/authProvider';
import RootNavigator from './src/navigation/navigators/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
