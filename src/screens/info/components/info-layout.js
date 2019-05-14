import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";



const InfoLayout = props => {
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
    height: "100%",
    
  },

  
});

export default InfoLayout;
