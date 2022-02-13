import React from 'react'
import { Pressable, StyleSheet,  View } from 'react-native'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder="Username"/>
      <FormikTextInput name='password' placeholder="Password"/>
      <FormikTextInput name='passwordConfirmation' placeholder="Password confirmation"/>
      <Pressable style={styles.signinContainer} onPress={onSubmit}>
        <Text style={{ textAlign: 'center'}} color="white" fontWeight='bold' fontSize="subheading">Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default SignUpForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white
  },
  signinContainer: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 4,
  }
})
