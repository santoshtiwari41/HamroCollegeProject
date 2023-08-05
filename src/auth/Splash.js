import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Splash = () => {
  return (
    <View style={styles.container}>
    <LottieView source={require('./splash3.json')}
    autoPlay 
    loop={false}
      />
    
    </View>
  )
}
styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#090C13',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Splash