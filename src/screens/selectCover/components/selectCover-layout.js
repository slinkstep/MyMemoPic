import React from "react";
import WINDOW from "../../../constants/layout";

import {ACTIONS} from "../../../constants/actiontypes"
import {LIST_COVERS} from "../../../constants/constants"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

import Header from "../../../components/header";
import ListAlbums from "../../library/components/list-albums"

const SelectCoverLayout = props => {

  return (
    
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Header {...props} source={sources} />
      </View>
      <View style = {styles.container_cover}>
        <View style = {[styles.cover,props.coverUri != null ?  styles.background_cover_false : styles.background_cover_true]}>
          <ImageBackground source={props.coverUri} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container_content}>
       
        <ListAlbums selected={props.selected} onPress={props.onPress} covers={LIST_COVERS}></ListAlbums>
      </View>
      
    </View>
    
    
  );
};

const sources = {
  logo1: require("../../../assets/library/Recurso_68.png"),
  logo3: require("../../../assets/tecInfo/Recurso_94.png")
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    backgroundColor:'#BEE0E8',
  },
  container_header: {
    width: "100%",
    height: "15%"
  },
  container_content: {
    width: "100%",
    height: "25%",
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor:'gray',
    
  },
  container_cover: {
    width: "100%",
    height: "60%",
    flexDirection : 'row', 
    alignItems: 'center',
    justifyContent: "center",
  },
  cover : {
    width:'45%',
    height:'60%',
    borderRadius: 10,
  },
  background_cover_true : {
    backgroundColor:'#FFCA21',
    borderWidth: 3,
  },
  background_cover_false : {
  }, 

  
});

export default SelectCoverLayout;
