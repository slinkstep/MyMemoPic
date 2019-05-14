import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../screens/home/containers/home";
import Library from "../screens/library/containers/library";
import Info from "../screens/info/containers/info"

const AppNavigator = createStackNavigator(
  {
    Home: {
        screen: Home,
        navigationOptions: {
            
            header: null //this will hide the header
          }
    },
    Lib:{
        screen: Library,
        navigationOptions: {
            
            header: null //this will hide the header
          }

    },
    Info:{
        screen: Info,
        navigationOptions: {
            
            header: null //this will hide the header
          },
          

    }

  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
