import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.notificationTitle}>{notification.title}</Text>
      <Text style={styles.notificationContent}>{notification.content}</Text>
      <Text style={styles.notificationDate}>{notification.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContent: {
    fontSize: 16,
    color: '#888',
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationItem;
