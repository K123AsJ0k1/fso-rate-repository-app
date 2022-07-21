import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems:'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding:10,
  },
  field: {
    display: 'flex',
    borderColor: 'grey',
    borderWidth:1,
    borderRadius:5,
    width:380,
    height:40,
    marginBottom:15,
    fontSize:18,
  },
  button: {
    display: 'flex',
    color:'white',
    backgroundColor: '#0366d6',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
  } 
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput style={styles.field} name="username" placeholder="username"/>
      <FormikTextInput style={styles.field} name="password" placeholder="password" secureTextEntry={true}/>
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  }
  
  return (
    <View style={styles.container}>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        {({ handleSubmit }) => (<SignInForm onSubmit={handleSubmit}/>)}
      </Formik>
    </View>
  )
};

export default SignIn;