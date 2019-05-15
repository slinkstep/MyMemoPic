import React from "react";
import WINDOW from "../../../constants/layout";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/header";
import ListAlbums from "./list-albums";

const LibraryLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Header {...props} source={sources} />
      </View>
      <View style={styles.row2}>
        <View style={styles.row2row1}>
          <Image style={styles.row2row1image1} source={sources.icon1} />
          <Image style={styles.row2row1image2} source={sources.icon2} />
        </View>
        <View style={styles.row2row2}>

          <ListAlbums></ListAlbums>
        </View>
        <View style={styles.row2row3}>
          <View style={styles.prueba1}>
            <Image style={styles.row2row3image1} source={sources.icon3} />
          </View>
          <View style={styles.prueba2}>
            <TouchableOpacity>
              <Image style={styles.row2row3image2} source={sources.icon5} />
            </TouchableOpacity>
          </View>
          <View style={styles.prueba3}>
            <Image style={styles.row2row3image3} source={sources.icon4} />
          </View>
        </View>
      </View>
    </View>
  );
};

const sources = {
  logo1: require("../../../assets/library/Recurso_68.png"),
  logo2: require("../../../assets/library/Recurso_69.png"),
  logo3: require("../../../assets/library/Recurso_70.png"),
  logo4: require("../../../assets/library/Recurso_73.png"),
  icon1: require("../../../assets/library/Recurso_64.png"),
  icon2: require("../../../assets/library/Recurso_65.png"),
  icon3: require("../../../assets/library/Recurso_66.png"),
  icon4: require("../../../assets/library/Recurso_67.png"),
  icon5: require("../../../assets/library/Recurso_74.png")
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  row1: {
    width: "100%",
    height: "15%"
  },

  row2: {
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  row2row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%",
    marginTop: 10
  },
  row2row1image1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    resizeMode: "contain",
    height: "99%"
  },
  row2row1image2: {
    height: "99%",
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  row2row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%"
  },
  row2row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%",
    marginBottom: 10
  },
  row2row3image1: {
    
    
  },
  row2row3image2: {
   resizeMode: 'contain',
   width: 70
  },
  row2row3image3: {
    
   
  },
  prueba1:{
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: "100%",
    width: "33%",
    resizeMode: 'contain'
  },
  prueba2:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
    width: "33%"

  },
  prueba3:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: "100%",
    width: "33%",

  }
});

export default LibraryLayout;
