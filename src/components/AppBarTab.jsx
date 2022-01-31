import React from 'react'
import { View  } from 'react-native'
import { Link } from 'react-router-native';
import Text from "./Text";


const AppBarTab = ({text, url}) => {
  console.log(text);
  return (
    <View style={{marginHorizontal: 10}}>
      <Link to={url}>
        <Text color='white' fontSize='subheading' fontWeight = 'bold'>{text}</Text>
      </Link>
    </View>
  )
}

export default AppBarTab
