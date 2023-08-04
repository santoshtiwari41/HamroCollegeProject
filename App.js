import 'react-native-gesture-handler';
import DrawerNavigator from './src/app/drawer/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



// import { StyleSheet, Text, View } from 'react-native';
// import DrawerNavigator from './src/app/drawer/DrawerNavigator';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Auth from './src/auth/Auth';
import { StatusBar } from 'react-native'
import Auth from './src/auth/Auth';
import StackNavigation from './src/app/stack/StackNavigation';

const Stack = createStackNavigator();


export default function App() {
  return (



    <>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
<StackNavigation /> 

{/* <Auth /> */}

    </>
      

  );
}















