import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity
        onPress={props.goToInfo
        } 
        >
          <Image 
          source={require("../../../assets/home/Recurso_58.png")} 
          style={styles.row1image}
          />
        </TouchableOpacity>
        
      </View>
      <View style={styles.row2}>
        <Image 
        source={require("../../../assets/home/Recurso_59.png")} 
        style={styles.row2title}
        />
        <Image 
        source={require("../../../assets/home/Recurso_55.png")} 
        style={styles.row2image2}
        />
        <TouchableOpacity
        onPress={props.goToLibrary} 
        >
        <Image 
        source={require("../../../assets/home/nuevo_boton.png")} 
        style={styles.row2button}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "#E1AF36",
    width: "100%",
    height: "100%",
    
    alignItems: "center"
  },
  row1:{
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  row1image:{
    width: 40,
    height: 40,
  },
  row2:{
    flex: 1,
    paddingTop: 20,
    justifyContent: "space-around",
    alignItems: "center"
    
  },
  row2title:{
    width: 200,
    height: 80,
    resizeMode: 'contain'
    
  },
  row2image2:{
    width: 250,
    height: 450,
    resizeMode: 'contain'
  },
  row2button:{
    width: 200,
    height: 100,
    resizeMode: 'contain'
  }

});

export default HomeLayout;
