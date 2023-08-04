import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const ACADEMIC_CALENDAR = {
  '2023-07-01': { selected: true, marked: true, dotColor: 'red' }, // Example date with a dot
  '2023-07-15': { selected: true, marked: true, dotColor: 'blue' }, // Example date with a different color dot
};

const AcademicCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Academic Calendar</Text>
      <Calendar
        markedDates={ACADEMIC_CALENDAR}
        markingType={'multi-dot'}
        theme={{
          dotColor: 'blue',
          selectedDayBackgroundColor: '#6200EE',
          todayTextColor: '#6200EE',
          monthTextColor: '#6200EE',
        }}
        style={styles.calendar}
      />
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
  calendar: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default AcademicCalendarScreen;
