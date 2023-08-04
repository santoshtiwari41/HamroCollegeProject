import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const ATTENDANCE_DATA = {
  studentId: '1',
  studentName: 'John Doe',
  attendance: {
    'Mathematics': {
      '2023-07-20': false, // Absent
      '2023-07-21': true,
      '2023-07-22': true,
      '2023-07-23': true,
      '2023-07-24': true, // Present
    },
    'Physics': {
      '2023-07-20': true, // Present
      '2023-07-21': true, // Present
    },
    'AM': {
      '2023-07-20': false, // Present
      '2023-07-21': false, // Present
    },
    'Thermal': {
      '2023-07-20': true, // Present
      '2023-07-21': true, // Present
    },
  },
};

const colors = ['#2ecc71', '#e74c3c', '#3498db', '#f39c12', '#9b59b6']; // Add more colors if needed

const AttendanceScreen = () => {
  const { navigate } = useNavigation();
  const { studentName, attendance } = ATTENDANCE_DATA;
  const [subjectStates, setSubjectStates] = useState(
    Object.keys(attendance || {}).reduce((acc, subject) => {
      acc[subject] = { showMore: false };
      return acc;
    }, {})
  );

  const toggleShowMore = (subject) => {
    setSubjectStates((prevSubjectStates) => ({
      ...prevSubjectStates,
      [subject]: { showMore: !prevSubjectStates[subject]?.showMore },
    }));
  };

  // Calculate total attendance percentage for each subject
  const subjectAttendancePercentages = Object.entries(attendance || {}).map(([subject, attendanceData], index) => {
    const totalDays = attendanceData ? Object.keys(attendanceData).length : 0;
    const presentDays = attendanceData ? Object.values(attendanceData).filter((status) => status).length : 0;
    const absentDays = attendanceData ? Object.values(attendanceData).filter((status) => !status).length : 0;
    const presentPercentage = totalDays ? (presentDays / totalDays) * 100 : 0;

    return {
      subject,
      presentPercentage,
      presentDays,
      absentDays,
    };
  });

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
                style={styles.header1}
                onPress={()=>{
                  navigate('DrawerNavigator')
                }}
            >
                <Ionicons name="arrow-back" size={27} color="#999999" />
            </TouchableOpacity>
      <View style={styles.barChartContainer}>
        <BarChart
          data={{
            labels: subjectAttendancePercentages.map((data) => data.subject),
            datasets: [
              {
                data: subjectAttendancePercentages.map((data) => data.presentPercentage),
                color: (opacity = 1) =>
                 `rgba(0, 0, 0, ${opacity})`,
                fromZero: true, // Start from 0% for this dataset
              },
            ],
          }}
          width={400}
          height={200}
          yAxisLabel="%"
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'rgba(200,100,100,0.5)',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo: 'rgba(100,200,100,0.5)',
            backgroundGradientToOpacity: 0.5,
            decimalPlaces: 0,
            color: (opacity = 1) => 
            
            // `rgba(0, 0, 0, ${opacity})`,
            `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            fromZero: true, // Set to true to start the Y-axis from 0
            min: 0, // Set the minimum value of the Y-axis to 0
            max: 100, // Set the maximum value of the Y-axis to 100 (maximum percentage)
          }}
          style={styles.barChart}
        />
      </View>
      {attendance &&
        Object.entries(attendance).map(([subject, attendanceData]) => {
          const { presentDays, absentDays } = subjectAttendancePercentages.find((data) => data.subject === subject);

          return (
            <View key={subject} style={styles.attendanceItem}>
              <Text style={styles.subjectText}>{subject}</Text>
              <View style={styles.dateContainer}>
                <View style={styles.presentRectangle} />
                <Text style={styles.dateText}>Present: {presentDays} days</Text>
              </View>
              <View style={styles.dateContainer}>
                <View style={styles.absentRectangle} />
                <Text style={styles.dateText}>Absent: {absentDays} days</Text>
              </View>
              {/* Rest of the code */}
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header1: {
    marginLeft: 13,
    marginTop: 0,
    marginBottom:15
  },
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    padding: 16,
  },
  barChartContainer: {
    alignItems: 'center',
    marginBottom: 16,
    
  },
  barChart: {
    borderRadius: 16,
   
  },
  attendanceItem: {
    marginBottom: 16,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'rgb(130,130,130)',
    fontSize:19
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    marginLeft: 8,
    color:'rgb(120,120,120)',
    fontSize:15.5
  },
  presentRectangle: {
    width: 16,
    height: 16,
    backgroundColor: '#2ecc71',
  },
  absentRectangle: {
    width: 16,
    height: 16,
    backgroundColor: '#e74c3c',
  },
  showMoreText: {
    color: '#6200EE',
    marginTop: 8,
    fontSize: 14,
  },
});

export default AttendanceScreen;
