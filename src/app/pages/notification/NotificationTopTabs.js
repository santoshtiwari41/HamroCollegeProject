import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    title: 'College Notice 1',
    content: 'Dear all,Please find the attached file which includes the note of Chapter 5 (Data Transmission).Thank you.',
    date: '2023-08-03 09:00 AM',
  },
  {
    id: '2',
    title: 'College Notice 2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore...',
    date: '2023-08-02 03:30 PM',
  },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  const handleNotificationPress = (notification) => {
    navigation.navigate('NotificationItem', { notification });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = notifications.filter(
      (notification) =>
        notification.title.toLowerCase().includes(query.toLowerCase()) ||
        notification.date.toLowerCase().includes(query.toLowerCase())||
        notification.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotifications(filtered);
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNotificationPress(item)}>
      <View style={styles.notificationItem}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationContent}>
          {item.content.length > 50 ? `${item.content.slice(0, 50)}...` : item.content}
        </Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search fo favourite"
          placeholderTextColor="rgba(120,120,120,0.5)"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={searchQuery ? filteredNotifications : notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#090C13',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#212121',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingVertical: 8,
    fontSize: 16,
    color:'rgba(120,120,120,1)'
  },
  notificationItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: '#212121',
    borderRadius: 7,
    marginLeft: 12,
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(140,140,140,1)',
  },
  notificationContent: {
    fontSize: 16,
    color: '#888',
    color: 'rgba(130,130,130,0.7)',
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationsScreen;
