import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import HomeItems from './homeItems/HomeItems';


import Slider from './Slider';



const Home = ({ navigation }) => {
  const [greeting, setGreeting] = useState('Good morning!');
  const [username, setUsername] = useState('Santosh Tiwari');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textcolor}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../../../assets/profile-picture.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />

      <View style={styles.content}>
        {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}> */}
       <Slider />
         
        <HomeItems />
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    color: 'white',
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: 'center',
    marginBottom:5
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(200,200,200 )',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 7,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: 'rgb(200,200,200 )',
    marginTop:3
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scroll: {
    // backgroundColor:'green',
    // marginBottom:110
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 2,
  
  },
});

export default Home;
