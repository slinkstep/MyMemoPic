import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../screens/home/containers/home";
import Library from "../screens/library/containers/library";
import Info from "../screens/info/containers/info";
import Album from "../screens/album/containers/album";
import TecInfo from "../screens/tecInfo/containers/tecInfo";
import SelectCover from "../screens/selectCover/containers/selectCover";
import Prueba from "../screens/prueba"
import SelectPhotos from "../screens/selectPhotos/containers/selectPhotos"
import ViewTecInfo from "../screens/viewTecInfo/containers/viewTecInfo"

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    Lib: {
      screen: Library,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    Album: {
      screen: Album,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    TecInfo: {
      screen: TecInfo,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    SelectCover: {
      screen: SelectCover,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    Prueba: {
      screen: Prueba,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    SelectPhotos: {
      screen: SelectPhotos,
      navigationOptions: {
        header: null //this will hide the header
      }
    },
    ViewTecInfo: {
      screen: ViewTecInfo,
      navigationOptions: {
        header: null //this will hide the header
      }
    }


  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
