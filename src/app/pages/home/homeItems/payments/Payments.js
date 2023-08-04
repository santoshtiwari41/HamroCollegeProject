import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Payments = () => {
  return (
    <View style={styles.container}>
      <Text>Notice</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'#090C13'
  }
})

export default Payments