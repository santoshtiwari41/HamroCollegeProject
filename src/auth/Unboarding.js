import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import UnboardingImage from '../../vectorimage/UnboardingImage'

const Unboarding = ({navigation}) => {
  const handleSignUp = () => {
    // Redirect to sign-up page
    // setLoggedIn(false);
    navigation.navigate('LogIn');
};
  return (
    <View style={Styles.container}>
       <UnboardingImage />
     <TouchableOpacity onPress={handleSignUp} >
       
        <Text>click</Text>
     </TouchableOpacity>
    </View>
  )
}
const Styles=StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default Unboarding