import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp';

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
      .required()
      .min(1, 'Username must be atleast 1 character')
      .max(30, 'Username can be at most 30 characters'),
    password: yup
        .string()
        .required()
        .min(5, 'Username must be atleast 5 characters')
        .max(50, 'Username can be at most 50 characters'),
    confirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Confirmation is different')
        .required('Password confirmation is required')
  });

const SignUpForm = ({ onSubmit}) => {
    return (
        <View style={styles.form}>
          <FormikTextInput name="username" placeholder="Username"/>
          <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
          <FormikTextInput name="confirmation" placeholder="Password confirmation" secureTextEntry={true}/>
          <Pressable onPress={onSubmit}>
            <Text style={styles.button}>Sign up</Text>
          </Pressable>
        </View>
    )
}

const SignUp = () => {
    const [signUp, result] = useSignUp()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        try {
          const data = {
            user: {
                username: values.username,
                password: values.password,
            }
          }
          await signUp(data)
          navigate("/")
        } catch (e) {
          console.log(e);
        }
    };

    return (
        <View style={styles.container}>
          <Formik initialValues={{ username: '', password: '', confirmation: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => (<SignUpForm onSubmit={handleSubmit}/>)}
          </Formik>
        </View>
    )
}

export default SignUp