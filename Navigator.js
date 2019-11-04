//@flow

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './js/HomeScreen';
import DetailsScreen from './js/DetailsScreen';
import RoundedRectScreen from './js/RoundedRectScreen';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    RoundedRect: RoundedRectScreen,
  },
  {
    initialRouteName: 'Home',
    /* Uncomment the code below for all screens to have the same header style */
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  },
);

export default createAppContainer(Navigator);
