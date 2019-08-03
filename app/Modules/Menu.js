import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from '../Screens/Home';
import ContactScreen from '../Screens/Contact';

const homeScreenStack = createStackNavigator(
    { 
        Home:Home, 
        Contact:ContactScreen 
    },
    {    
    defaultNavigationOptions:{
        headerTintColor: "black",
        headerStyle: {
            backgroundColor: "pink"
        }
    },
    navigationOptions: ({navigation}) => ({
        initialRouteName: "Home",
        headerMode: "screen",
        headerTitle: "Home",
        drawerLabel: "Home"
    })
    },
);

const drawerConfigs = {}


export const AppNavigator = createDrawerNavigator(
    {
        HomeScreen: {
            name: "HomeScreenStack",
            screen: homeScreenStack
        },        
    },drawerConfigs
);