import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-dom';

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .test('len', 'Username must have atleast 1 character', val => {
      if (val === undefined) {
        return false
      }
      return val.length >= 1
    }),
  password: yup
    .string()
    .test('len', 'Password must have atleast 5 characters', val => {
      if (val === undefined) {
        return false
      }
      return val.length >= 5
    }),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="username"/>
      <FormikTextInput name="password" placeholder="password" secureTextEntry={true}/>
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <View style={styles.container}>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (<SignInForm onSubmit={handleSubmit}/>)}
      </Formik>
    </View>
  )
};

export default SignIn;