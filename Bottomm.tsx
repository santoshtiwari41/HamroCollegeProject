
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { Ionicons } from '@expo/vector-icons';


const Bottomm=()=>{
const tabs = [
  {
    name: 'Home',
    activeIcon: <Ionicons name="home" size={32} color="#362564"  />
   ,
    inactiveIcon: <Ionicons name="home" color="#4d4d4d" size={25} />
  },
  {
    name: 'list',
    activeIcon: <Ionicons name="search" color="#fff" size={25} />,
    inactiveIcon: <Ionicons name="search" color="#4d4d4d" size={25} />
  },
  {
    name: 'camera',
    activeIcon: <Ionicons name="camera" color="#fff" size={25} />,
    inactiveIcon: <Ionicons name="camera" color="#4d4d4d" size={25} />
  },
  {
    name: 'Notification',
    activeIcon: <Ionicons name="menu" color="#fff" size={25} />,
    inactiveIcon: <Ionicons name="menu" color="#4d4d4d" size={25} />
  },
 
];


return (
  <Tabbar
    tabs={tabs}
    tabBarContainerBackground='#6699ff'
    tabBarBackground='#fff'
    activeTabBackground='#6699ff'
    labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
    onTabChange={() => console.log('Tab changed')}
  />
)};
export default Bottomm;