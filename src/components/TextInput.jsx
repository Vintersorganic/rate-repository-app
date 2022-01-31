import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputStyle: {
    margin: 10,
    borderWidth: 2,
    borderColor: theme.colors.mainBackground,
    borderRadius: 4,
    padding: 10,
    marginTop: 20
  },
  inputErrorStyle: {
    borderColor: theme.colors.red,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.inputStyle, error && styles.inputErrorStyle];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
