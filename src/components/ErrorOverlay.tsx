import { Text, View } from 'react-native';

type Props = {
  isError: boolean;
  message?: string;
};

export function ErrorOverlay({ isError, message }: Props) {
  if (!isError) {
    return null;
  }
  return (
    <View>
      <Text>Error...</Text>
      <Text>{message}</Text>
    </View>
  );
}
