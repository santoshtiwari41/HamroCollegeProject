import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity ,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



const facultyMembers = [
  { id: '1', name: 'Computer' },
  { id: '2', name: 'Civil' },
  { id: '3', name: 'Software' },
  { id: '4', name: 'IT' },
  { id: '5', name: 'BCA' },
  { id: '6', name: 'Electronics' },
];

const semesters = [
  { id: '1', name: 'First' },
  { id: '2', name: 'Second' },
  { id: '3', name: 'Third' },
  { id: '4', name: 'Fourth' },
  { id: '5', name: 'Fifth' },
  { id: '6', name: 'Sixth' },
  { id: '7', name: 'Seventh' },
  { id: '8', name: 'Eighth' },
];

const days = [
  { id: '1', name: 'Sunday' },
  { id: '2', name: 'Monday' },
  { id: '3', name: 'Tuesday' },
  { id: '4', name: 'Wednesday' },
  { id: '5', name: 'Thursday' },
  { id: '6', name: 'Friday' },
];

const scheduleData = {
  '1_1': {
    Sunday: [
      { subject: 'Mathematics I', time: '8:00 AM - 9:00 AM' },
      { subject: 'Chemistry', time: '9:30 AM - 10:30 AM' },
      { subject: 'BEE', time: '8:00 AM - 9:00 AM' },
      { subject: 'Programming in c', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'BEE', time: '8:30 AM - 9:30 AM' },
      { subject: 'Chemistry', time: '10:00 AM - 11:00 AM' },
      { subject: 'Mathematics I', time: '8:30 AM - 9:30 AM' },
      { subject: 'Programming in c', time: '10:00 AM - 11:00 AM' },
      
    ],
    Tuesday: [
      { subject: 'English', time: '8:30 AM - 9:30 AM' },
      { subject: 'History', time: '10:00 AM - 11:00 AM' },
      
    ],
    Wednesday: [
      { subject: 'English', time: '8:30 AM - 9:30 AM' },
      { subject: 'History', time: '10:00 AM - 11:00 AM' },
      
    ],
    Thrusday: [
      { subject: 'English', time: '8:30 AM - 9:30 AM' },
      { subject: 'History', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_2': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_3': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_4': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_5': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_6': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_7': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '1_8': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_1': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_2': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_3': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_4': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_5': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_6': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_7': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '2_8': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  '3_1': {
    Sunday: [
      { subject: 'Subject 1', time: '8:00 AM - 9:00 AM' },
      { subject: 'Subject 2', time: '9:30 AM - 10:30 AM' },
      
    ],
    Monday: [
      { subject: 'Subject 3', time: '8:30 AM - 9:30 AM' },
      { subject: 'Subject 4', time: '10:00 AM - 11:00 AM' },
      
    ],
    
  },
  
};

const RoutineScreen = () => {
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

  const renderSchedule = () => {
    const daysSchedule = Object.entries(schedule);
    return (
      <FlatList
        data={daysSchedule}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.dayText}>{item[0]}</Text>
            <View style={styles.subjectsContainer}>
              {item[1].map((subjectItem, index) => (
                <View key={index} style={styles.subjectItem}>
                  <Text style={styles.subjectText}>{subjectItem.subject}</Text>
                  <Text style={styles.timeText}>{subjectItem.time}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header1}
        onPress={() => {
          navigate('DrawerNavigator');
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
    // backgroundColor: '#F8F8F8',
    padding: 16,
    backgroundColor: '#090C13',

  },
  header1: {
    marginLeft: 13,
    marginTop: 0,
    marginBottom:15
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
    color:'rgb(130,130,130)'
  },
  selectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
   
  },
  selectionItem: {
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(10,10,10)',
  },
  selected: {
    backgroundColor: 'rgba(181,100,241,0.9)',
  },
  selectedText: {
    color: '#000',
  },
  scheduleContainer: {
    flex: 1,
    borderRadius: 8,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#212121',
    borderRadius:10
  },
  dayText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(18,90,241,0.4)',
    marginRight:9,
   
    
  },
  subjectsContainer: {
    flex: 1,
  },
  subjectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    
  },
  subjectText: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'rgb(130,130,130)'
  },
  timeText: {
    fontSize: 13,
    color: '#666',
    marginRight:10,
    marginTop:12
  },
});

export default RoutineScreen;