import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './js/HomeScreen';
import DetailsScreen from './js/DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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

export default createAppContainer(AppNavigator);
