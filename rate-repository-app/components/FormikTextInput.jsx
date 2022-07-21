import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom:15,
  },
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
    fontSize:16,
  },
  normalField: {
    display: 'flex',
    borderColor: 'grey',
    borderWidth:1,
    borderRadius:5,
    width:380,
    height:40,
    fontSize:18,
  },
  errorField: {
    display: 'flex',
    borderColor: '#d73a4a',
    borderWidth:1,
    borderRadius:5,
    width:380,
    height:40,
    fontSize:18,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        style={showError ? styles.errorField : styles.normalField}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;