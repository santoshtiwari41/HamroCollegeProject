import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const NotificationItem = ({ route }) => {
  const { notification } = route.params;
  const { navigate } = useNavigation();


  return (
    <View style={styles.container}>
       <TouchableOpacity
                style={styles.header}
                onPress={()=>{
                  navigate('DrawerNavigator')
                }}
            >
                <Ionicons name="arrow-back" size={27} color="#999999" />
            </TouchableOpacity>
      <Text style={styles.notificationTitle}>{notification.title}</Text>
      <Text style={styles.notificationContent}>{notification.content}</Text>
      <Text style={styles.notificationDate}>{notification.date}</Text>
      <Text>new</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    marginLeft: 13,
    marginTop: 5,
    marginBottom:30
    
},
  notificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationContent: {
    fontSize: 18,
    color: '#888',
    marginTop: 8,
  },
  notificationDate: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
});

export default NotificationItem;
