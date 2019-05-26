import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";


const InfoTitle = props => {
  return (
    <View style={styles.container}>
      <Text>ESTOY EN INFO</Text>
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
