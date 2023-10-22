import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import Pressable from '../../components/Pressable';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { OrganizationRegistrationScreenNavigationProp } from '../../navigation/types';

export default function OrganizationScreen() {
  const navigation =
    useNavigation<OrganizationRegistrationScreenNavigationProp>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Organization screen</Text>
      <Text>
        If you answer yes a notification will be sent to the owner of this
        organization for verification. Once verification is recieved, you will
        be added to this organization.
      </Text>
      <Pressable
        onPress={() => navigation.navigate(PUBLIC_ROUTES.LOGIN_SCREEN)}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
