import { Dimensions } from 'react-native';
// import { Constants } from 'expo';
import Constants from 'expo-constants'

const WINDOW = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    STATUS_BAR_HEIGHT: Constants.statusBarHeight
};




export default WINDOW;
