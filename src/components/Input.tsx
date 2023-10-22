import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { COLORS } from '../theme/colors';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
  touched?: boolean;
};

export default function Input(props: InputProps) {
  const { label, error, touched, ...rest } = props;
  return (
    <View>
      <Text style={error && touched ? styles.errorText : null}>{label}</Text>
      <TextInput
        style={[
          styles.inputStyle,
          { width: useWindowDimensions().width - 60 },
          { borderColor: error && touched ? 'red' : 'gray' },
        ]}
        {...rest}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.RED,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
