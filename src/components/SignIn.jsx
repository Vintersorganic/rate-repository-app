import { Formik } from "formik";
import { View } from "react-native";
import SignInForm from "./SignInForm";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const initialValues = {
  password: 'password',
  username: 'kalle'
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
  const [signIn] = useSignIn()
  const navigate = useNavigate()

 const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>

  </View>
};

export default SignIn;