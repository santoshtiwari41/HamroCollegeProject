import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NOTIFICATIONS = [
  { id: '1', title: 'Assessment Schedule', content: 'Dear all please find attachment of routine for this semester ', date: '2023-07-22' },
  { id: '2', title: 'Exam form notice', content: 'Dear all, please .', date: '2023-07-23' },
  { id: '3', title: 'New Message', content: 'You have a new message from John Doe.', date: '2023-07-22' },
  { id: '4', title: 'Reminder', content: 'Your meeting is scheduled at 3:00 PM.', date: '2023-07-23' },
  
];

const Notification = () => {
  const { navigate } = useNavigation();
  const [expandedItem, setExpandedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.id;

    const toggleExpansion = () => {
      setExpandedItem(isExpanded ? null : item.id);
    };

    return (
      <TouchableOpacity onPress={() => navigate('NotificationDetailsScreen', { notification: item })}>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          {isExpanded ? (
            <Text style={styles.notificationContent}>{item.content}</Text>
          ) : (
            <Text style={styles.hint}>{item.content.substring(0, 30)}...</Text>
          )}
          <Text style={styles.notificationDate}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTIFICATIONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 13,
    marginBottom: 200,
  },
  notificationItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 8,
    backgroundColor: '#212121',
    padding: 10,
    borderRadius: 12,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'rgb(200, 200, 200)',
  },
  notificationContent: {
    fontSize: 14,
    color: 'rgb(128, 128, 135)',
  },
  hint: {
    fontSize: 14,
    color: 'rgb(128, 128, 135)',
    fontStyle: 'italic',
  },
  notificationDate: {
    fontSize: 12,
    color: 'rgb(128, 128, 135)',
  },
});

export default Notification;
