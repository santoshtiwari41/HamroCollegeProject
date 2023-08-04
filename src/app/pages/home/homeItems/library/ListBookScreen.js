import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const physicsImage = require('../../../../../../assets/physics.jpg');
const math3 = require('../../../../../../assets/math3.jpg');
const dbms = require('../../../../../../assets/dbms.jpg');
const proc = require('../../../../../../assets/proc.jpg');
const dsa = require('../../../../../../assets/dsa.jpg');
const microprocessor = require('../../../../../../assets/microprocessor.jpg');

const BOOKS = [
  { id: '1', title: 'Physic', author: 'Author 1', available: 5, imageUrl: physicsImage },
  { id: '2', title: 'Engineering Mathematics III', author: 'Author 2', available: 3, imageUrl: math3 },
  { id: '3', title: 'Programming in C', author: 'Author 1', available: 5, imageUrl: proc },
  { id: '4', title: 'Data Structure And Alogorithm', author: 'Author 2', available: 3, imageUrl: dsa },
 
  { id: '5', title: 'Microprocessor', author: 'Author 1', available: 5, imageUrl: microprocessor },
  { id: '6', title: 'Database Management System', author: 'Author 2', available: 3, imageUrl: dbms },
 
  { id: '7', title: 'Book 1', author: 'Author 1', available: 5, imageUrl: physicsImage },
  { id: '8', title: 'Book 2', author: 'Author 2', available: 3, imageUrl: physicsImage },
  { id: '9', title: 'Book 1', author: 'Author 1', available: 5, imageUrl: physicsImage },
  { id: '10', title: 'Book 2', author: 'Author 2', available: 3, imageUrl: physicsImage },
  { id: '11', title: 'Book 1', author: 'Author 1', available: 5, imageUrl: physicsImage },
  { id: '12', title: 'Book 2', author: 'Author 2', available: 3, imageUrl: physicsImage },
 
];

const ListBookScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const { navigate } = useNavigation();

  const handleSelectBook = (bookId) => {
    setSelectedBooks((prevSelectedBooks) => {
      // If the book is already selected, remove it from the array
      if (prevSelectedBooks.includes(bookId)) {
        return prevSelectedBooks.filter((id) => id !== bookId);
      }
      // If the book is not selected, add it to the array
      return [...prevSelectedBooks, bookId];
    });
  };
  

  const handleNext = () => {
    // navigate('SelectedBooksScreen', { selectedBooks });
    console.warn('pressed')
    setSelectedBooks([])
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedBooks.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.bookItem, isSelected ? styles.selected : null]}
        onPress={() => handleSelectBook(item.id)}
      >
        <Image style={styles.bookImage} source={item.imageUrl} />
        <View style={styles.bookDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>Author: {item.author}</Text>
          <Text style={styles.available}>Available: {item.available}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredBooks = BOOKS.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <TextInput
        style={styles.searchInput}
        placeholder="Search for favourite books"
        value={searchQuery}
        placeholderTextColor="#555555"
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {selectedBooks.length > 0 && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#212121',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    height:40,
    color:'rgb(128,128,135 )'

  },
  listContainer: {
    paddingBottom: 16,
  },
  bookItem: {
    flexDirection: 'row',
    backgroundColor: '#212121',
    borderRadius: 8,
    padding: 16,
    marginBottom: 18,
    // backgroundColor:'green'
  },
  selected: {
    backgroundColor: '#C8E6C9',
  },
  bookImage: {
    width: 90,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  bookDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'rgb(128,128,135 )'
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
  nextButton: {
    backgroundColor: 'rgba(181,100,241,1)',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    marginLeft: 13,
    marginTop: 0,
    
},
});

export default ListBookScreen;
