import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
// const Dd =require('../../../../../../assets/my.pdf') ;
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';




const facultyMembers = [
  { id: '1', name: 'Computer' },
  { id: '2', name: 'Civil' },
  { id: '3', name: 'IT' },
  { id: '4', name: 'Software' },
  { id: '5', name: 'Electronic' },
  { id: '6', name: 'BCA' },

];

const semesters = [
  { id: '1', name: 'Semester 1' },
  { id: '2', name: 'Semester 2' },
  { id: '3', name: 'Semester 3' },
  { id: '4', name: 'Semester 4' },
  { id: '5', name: 'Semester 5' },
  { id: '6', name: 'Semester 6' },
  { id: '7', name: 'Semester 7' },
  { id: '8', name: 'Semester 8' },

];



const scheduleData = {
  '1_1': [
    { subject: 'Programming in c', time: '3 hrs', pdfUrl: './my.pdf' },
    { subject: 'Engineering Mathematics I', time: '3 hrs', pdfUrl: './my.pdf' },
    { subject: 'Basic Electrical Engineering', time: '3 hrs', pdfUrl: './my.pdf' },
  ],
  '1_2': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_3': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_4': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_5': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_6': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_7': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '1_8': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_1': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_2': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_3': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_4': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_5': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],
  '2_6': [
    { subject: 'English', time: '2 hrs', pdfUrl: './my.pdf' },
    { subject: 'History', time: '4 hrs', pdfUrl: './my.pdf' },
  ],

};

const Syllabus = () => {
  const { navigate } = useNavigation();
  const [selectedFaculty, setSelectedFaculty] = useState(facultyMembers[0].id);
  const [selectedSemester, setSelectedSemester] = useState(semesters[0].id);

  const scheduleKey = `${selectedFaculty}_${selectedSemester}`;
  const schedule = scheduleData[scheduleKey];

  const renderSelection = (data, state, setState) => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.selectionItem, state === item.id ? styles.selected : null]}
            onPress={() => setState(item.id)}
          >
            <Text style={[styles.selectionText, state === item.id ? styles.selectedText : null]}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };

  const openPDF = async (pdfUrl) => {
    try {
      const localUri = FileSystem.cacheDirectory + 'syllabus.pdf';
      const fileInfo = await FileSystem.getInfoAsync(localUri);
      if (!fileInfo.exists) {
        const downloadOptions = { headers: { 'Authorization': 'Bearer YOUR_AUTH_TOKEN' } }; // Replace with any necessary headers for your server
        await FileSystem.downloadAsync(pdfUrl, localUri, downloadOptions);
      }

      if (Platform.OS === 'android') {
        IntentLauncher.startActivityAsync(IntentLauncher.ACTION_VIEW, { data: FileSystem.getContentUriAsync(localUri), type: 'application/pdf' });
      } else {
        Linking.openURL('file://' + localUri);
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };

  const renderSchedule = () => {
    return (
      <FlatList
        data={schedule}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openPDF(item.pdfUrl)}>
            <View style={styles.scheduleItem}>
              <Text style={styles.subjectText}>{item.subject}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
                style={styles.header1}
                onPress={()=>{
                  navigate('DrawerNavigator')
                }}
            >
                <Ionicons name="arrow-back" size={27} color="#999999" />
            </TouchableOpacity> 

      <View style={styles.selectionContainer}>
        <Text style={styles.subHeading}>Faculty:</Text>
        {renderSelection(facultyMembers, selectedFaculty, setSelectedFaculty)}
      </View>
      <View style={styles.selectionContainer}>
        <Text style={styles.subHeading}>Semester:</Text>
        {renderSelection(semesters, selectedSemester, setSelectedSemester)}
      </View>

      <Text style={styles.subHeading}>Routine Schedule:</Text>
      <View style={styles.scheduleContainer}>{renderSchedule()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectionItem: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  selected: {
    backgroundColor: '#C8E6C9',
  },
  selectedText: {
    color: '#000',
  },
  scheduleContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  scheduleItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'green',
    borderRadius: 7
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
  },
});

export default Syllabus;
