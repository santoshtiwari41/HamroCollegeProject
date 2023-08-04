import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const HomeworkPage = () => {
  const [homeworkText, setHomeworkText] = useState('');

  const handleSubmitHomework = () => {
    // Here you can implement the logic to submit the homework
    // For this example, we'll just show an alert with the submitted text
    Alert.alert('Homework Submitted', homeworkText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homework Submission</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write your homework here..."
          value={homeworkText}
          onChangeText={setHomeworkText}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitHomework}>
        <Text style={styles.submitButtonText}>Submit Homework</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  input: {
    minHeight: 100,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeworkPage;
 