import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

import {
 
  DotIndicator,

} from 'react-native-indicators';

import InfoTitle from "../components/info-title";


const InfoLayout = props => {
  return (
    <View style={styles.container}>
      <DotIndicator style={styles.balls} color='gray'></DotIndicator>
      <Text>ESTOY EN INFO</Text>
      <InfoTitle></InfoTitle>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "50px",
    
  },
  
});

export default InfoLayout;
