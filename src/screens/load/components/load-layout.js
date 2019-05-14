import React from "react";
import WINDOW from "../../../constants/layout";

import {
 
  DotIndicator,

} from 'react-native-indicators';

import { View, Image,StyleSheet } from "react-native";

const LoadLayout = props => {
  return (
    <View style={styles.container}>
  
      
      <DotIndicator style={styles.balls} color='gray'></DotIndicator>
      

      
      <Image
      source={require('../../../assets/load/Recurso_1.png')}
      style={styles.image}
      ></Image>

      
            
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  image: {
    position: 'absolute',
    top:'40%',
    paddingVertical: 90,
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
  balls: {
    position: 'absolute',
    top:'40%',
    
  }
 
});

export default LoadLayout;
