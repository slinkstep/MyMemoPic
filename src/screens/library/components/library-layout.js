import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Header from "../../../components/header";
import ListAlbums from "./list-albums";

const LibraryLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Header {...props} source={sources} />
      </View>

      
        <ImageBackground
          style={styles.row2image}
          resizeMode="contain"
          source={require("../../../assets/library/back.png")}
        >
        <View style={styles.list}>
          <ListAlbums />

          </View>
        </ImageBackground>
      
    </View>
  );
};

const sources = {
  logo1: require("../../../assets/library/Recurso_68.png"),
  logo2: require("../../../assets/library/Recurso_69.png"),
  logo3: require("../../../assets/library/Recurso_70.png"),
  logo4: require("../../../assets/library/Recurso_73.png")
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  row1:{
    width: "100%",
    height: "20%"
  },

  row2: {
    width: "100%",
    height: "80%"

    
    
  },

  row2image: {
    width: "100%",
    height: "80%"
   
    
  },
  list: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    marginHorizontal: "40%"


  }
});

export default LibraryLayout;
