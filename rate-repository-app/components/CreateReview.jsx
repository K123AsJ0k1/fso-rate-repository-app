import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useReview from '../hooks/useReview';

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
    repo_owner: yup
        .string()
        .required('Repository owner name is required'),
    repo_name: yup
        .string()
        .required('Repository name is required'),
    repo_rating: yup
       .number()
       .required('Rating is required')
       .moreThan(-1, 'Rating must be more than 0')
       .lessThan(101, 'Rating must be less than 100')
       .integer('Must be an integer'),
    repo_review: yup
       .string()
});

const ReviewForm = ({ onSubmit }) => {
    return (
      <View style={styles.form}>
        <FormikTextInput name="repo_owner" placeholder="Repository owner name"/>
        <FormikTextInput name="repo_name" placeholder="Repository name"/>
        <FormikTextInput name="repo_rating" placeholder="Rating between 0 and 100"/>
        <FormikTextInput name="repo_review" placeholder="Review"/>
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Create a review</Text>
        </Pressable>
      </View>
    )
}

const CreateReview = () => {
    const [review, result] = useReview()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
      try {
        const data = { review:{ 
          repositoryName: values.repo_name, 
          ownerName: values.repo_owner, 
          rating: parseInt(values.repo_rating), 
          text: values.repo_review 
        }}
        await review(data);
        navigate(`/repository/${values.repo_owner}.${values.repo_name}`)
      } catch (e) {
        console.log(e);
      }
    }

    return (
        <View style={styles.container}>
          <Formik initialValues={{ repo_owner: '', repo_name: '', repo_rating: '', repo_review: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => (<ReviewForm onSubmit={handleSubmit}/>)}
          </Formik>
        </View>
      )
}

export default CreateReview