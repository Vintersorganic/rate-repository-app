import { useApolloClient } from '@apollo/client';
import React from 'react'
import { View  } from 'react-native'
import { Link } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import Text from "./Text";


const AppBarTab = ({text, url}) => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  

  

  const signout = async() => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore();
  }
  
  return (
    <View style={{marginHorizontal: 10}}>
      <Link to={url} onPress={text === 'Sign Out' ? signout : false}>
        <Text color='white' fontSize='subheading' fontWeight = 'bold'>{text}</Text>
      </Link>
    </View>
  )
}

export default AppBarTab
