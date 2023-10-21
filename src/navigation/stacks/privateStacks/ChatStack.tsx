import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../../../screens/ChatScreen';

const ChatStackNavigator = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <ChatStackNavigator.Navigator>
      <ChatStackNavigator.Screen name="ChatScreen" component={ChatScreen} />
    </ChatStackNavigator.Navigator>
  );
}
