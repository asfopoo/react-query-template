import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../../../screens/ChatScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { ChatStackParamList } from '../../types';

const ChatStackNavigator = createNativeStackNavigator<ChatStackParamList>();

export default function ChatStack() {
  return (
    <ChatStackNavigator.Navigator>
      <ChatStackNavigator.Screen
        name={PRIVATE_ROUTES.CHAT_SCREEN}
        component={ChatScreen}
      />
    </ChatStackNavigator.Navigator>
  );
}
