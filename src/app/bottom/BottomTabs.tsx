import Books from '../pages/books/Books';
import Calendar from '../pages/calendar/Calendar';
import Home from '../pages/home/Home';
import NotificationTopTabs from '../pages/notification/NotificationTopTabs';
import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const BottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Notification'}}
          name="Notification"
          component={NotificationTopTabs}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Calendar'}}
          name="Calendar"
          component={Calendar}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Books'}}
          name="book"
          component={Books}
        /> 
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
