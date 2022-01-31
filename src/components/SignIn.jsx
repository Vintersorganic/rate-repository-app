import { Formik } from "formik";
import { View } from "react-native";
import SignInForm from "./SignInForm";
import * as yup from 'yup';

const initialValues = {
  password: '',
  username: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be greater or equal to 4')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Height must be greater or equal to 6')
    .required('Password is required'),
});


const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }

  return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>

  </View>
};

export default SignIn;