import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SelectedBooksScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedBooks } = route.params;

  const handleBorrowBooks = () => {
    // Implement the "Borrow Books" functionality here
    // For example, you can display a confirmation message using Alert.alert or any other method
    // Don't forget to reset the selectedBooks state after processing
    Alert.alert('Success', 'You have successfully borrowed the selected books.');
    navigation.goBack(); // Navigate back to the LibraryScreen after borrowing
  };

  const renderSelectedBooks = () => {
    return selectedBooks.map((bookId) => {
      // Assuming the BOOKS array is available from the LibraryScreen or fetched from an API
      const book = BOOKS.find((item) => item.id === bookId);
      if (!book) return null;

      return (
        <View key={book.id} style={styles.bookItem}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>Author: {book.author}</Text>
          <Text style={styles.available}>Available: {book.available}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Selected Books</Text>
      {renderSelectedBooks()}
      <TouchableOpacity style={styles.borrowButton} onPress={handleBorrowBooks}>
        <Text style={styles.borrowButtonText}>Borrow Books</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  available: {
    fontSize: 14,
    color: 'green',
    marginTop: 8,
  },
  borrowButton: {
    backgroundColor: '#6200EE',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  borrowButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelectedBooksScreen;
