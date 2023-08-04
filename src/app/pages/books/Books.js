import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Books = () => {
  return (
    <View style={styles.container}>
      <Text>Books</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#090C13',
    flex:1
  }
})

export default Books