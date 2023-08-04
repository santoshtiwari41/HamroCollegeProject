import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import Main2 from './Main2';
import BottomTabs from '../bottom/BottomTabs';


const Drawer = createDrawerNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
 <Drawer.Navigator >
        <Drawer.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Drawer.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
         <Drawer.Screen
          name="Main2"
          component={Main2}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
     
      );
};

      export default DrawerNavigator;

