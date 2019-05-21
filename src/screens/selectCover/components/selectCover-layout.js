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
  KeyboardAvoidingView
} from "react-native";

import Header from "../../../components/header";
import ListAlbums from "../../library/components/list-albums"

const SelectCoverLayout = props => {
    
  return (
    
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Header {...props} source={sources} />
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
  },
  container_header: {
    width: "100%",
    height: "15%"
  },
  container_content: {
    width: "100%",
    height: "60%",
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor: 'gray'
  }
  
});

export default SelectCoverLayout;
