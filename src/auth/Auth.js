import { View, Text } from 'react-native';
import React from 'react';
import LogIn from './LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Unboarding from './Unboarding';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      
         <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
        {/* <Stack.Screen
            name="Unboarding"
            component={Unboarding}
            options={{ headerShown: false }} // Hide the header for this screen
          /> */}
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{ headerShown: false }} // Hide the header for this screen
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }} // Hide the header for this screen
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{ headerShown: false }} // Hide the header for this screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Auth;
