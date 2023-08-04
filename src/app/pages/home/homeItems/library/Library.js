import { createStackNavigator } from '@react-navigation/stack';
import ListBookScreen from './ListBookScreen';
import SelectedBooksScreen from './SelectedBooksScreen';

const Stack = createStackNavigator();

 export default function Library() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListBookScreen" component={ListBookScreen} options={{headerShown:false}} />
      <Stack.Screen name="SelectedBooksScreen" component={SelectedBooksScreen}  options={{headerShown:false}} />
     
    </Stack.Navigator>
  );
}