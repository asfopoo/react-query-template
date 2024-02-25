import { Text, View } from 'react-native';

type Props = {
  isLoading: boolean;
};

export function LoadingIndicator({ isLoading }: Props) {
  if (!isLoading) {
    return null;
  }
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
