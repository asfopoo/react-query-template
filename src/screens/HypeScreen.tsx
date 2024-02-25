import { View, Text } from 'react-native';

import { useFetchUser } from '../api/user/queries';
import { ErrorOverlay } from '../components/ErrorOverlay';
import { LoadingIndicator } from '../components/LoadingIndicator';

export default function HypeScreen() {
  const { isPending, isError, data, error } = useFetchUser();

  return (
    <View>
      <LoadingIndicator isLoading={isPending} />
      <ErrorOverlay isError={isError} message={error?.message} />
      <Text>{data}</Text>
    </View>
  );
}
