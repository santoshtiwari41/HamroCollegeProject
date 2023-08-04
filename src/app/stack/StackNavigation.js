import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from '../bottom/BottomTabs';
import Homework from '../pages/home/homeItems/homework/Homework';
import Attendence from '../pages/home/homeItems/attendance/Attendence';
import Due from '../pages/home/homeItems/due/Due';
import Statements from '../pages/home/homeItems/statements/Statements';
import Payments from '../pages/home/homeItems/payments/Payments';
import Notice from '../pages/home/homeItems/notice/Notice';
import Syllabus from '../pages/home/homeItems/syllabus/Syllabus';
import Result from '../pages/home/homeItems/result/Result';
import Library from '../pages/home/homeItems/library/Library';
import Routine from '../pages/home/homeItems/routine/Routine';
import DrawerNavigator from '../drawer/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NotificationDetailsScreen from '../pages/notification/NotificationDetailsScreen';
import PrebookedBooksScreen from '../pages/home/homeItems/library/SelectedBooksScreen';
import SelectedBooksScreen from '../pages/home/homeItems/library/SelectedBooksScreen';
import NotificationDetailsSccreen from '../pages/notification/NotificationDetailsScreen';
const Stack = createNativeStackNavigator();


const StackNavigation = ({navigation}) => {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    <Stack.Screen
      name="Homework"
      component={Homework}
      options={{
       
        headerShown: true,
      }}
    />
     <Stack.Screen
      name="Attendence"
      component={Attendence}
      options={{
       
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Routine"
      component={Routine}
      options={{
       
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Library"
      component={Library}
      options={{
       
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Result"
      component={Result}
      options={{
       
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Syllabus"
      component={Syllabus}
      options={{
       
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Notice"
      component={Notice}
      options={{
       
        headerShown: true,
      }}
    />
     <Stack.Screen
      name="Payments"
      component={Payments}
      options={{
       
        headerShown: true,
      }}
    />
     <Stack.Screen
      name="Statements"
      component={Statements}
      options={{
       
        headerShown: true,
      }}
    />
     <Stack.Screen
      name="Due"
      component={Due}
      options={{
       
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="NotificationItem"
      component={NotificationDetailsSccreen}
      options={{
       
        headerShown: false,
      }}
    />
     
   
    
  </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default StackNavigation;
