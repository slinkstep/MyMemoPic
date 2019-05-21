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

const AlbumLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Header {...props} source={sources} />
      </View>
      <View style={styles.container_content}>
        <View style={styles.container_content_row1}>
        {props.image &&
          <Image source={{ uri: props.image }} style={{ width: 300, height: 300 }} resizeMode='contain'/>}
        </View>
        <View style={styles.container_content_row2}>
        <TouchableOpacity>
          <Image style={styles.container_content_row2_icons} source={require("../../../assets/album/Recurso_75.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.container_content_row2_icons} source={require("../../../assets/album/Recurso_76.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.picker()}>
          <Image style={styles.container_content_row2_icons} source={require("../../../assets/album/Recurso_77.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.container_content_row2_icons} source={require("../../../assets/album/Recurso_78.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const sources = {
  logo1: require("../../../assets/library/Recurso_68.png"),
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
  container_header: {
    width: "100%",
    height: "15%"
  },
  container_content: {
    width: "100%",
    height: "85%",
    
  },
  container_content_row1: {
   
    alignItems: "center",
    justifyContent: "center",
    height: "80%"
  },
  container_content_row1_image:{
    width: "100%",
    height: "80%",
    resizeMode: 'contain'
  },
  container_content_row2: {
 
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: "20%",
    flexDirection: 'row'
  },
  container_content_row2_icons: {
    width: 50,
    height:50
  }
});

export default AlbumLayout;
