import React from "react";
import WINDOW from "../../../constants/layout";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import Header from "../../../components/header";

const AlbumLayout = props => {
  keyExtractor = (item, index) => index.toString();

  let menuDeleteHandler = () =>{
    props.menuDeleteOn;
  }
const deleteMenuOn = 
  <View>
    <Button 
      // onPress={}
      title='Borrar'/>
    <Button 
      // onPress={menuDeleteOff}
      title='Cancelar'/>
  </View>; 

const deleteMenuOff = 
 <View>
 </View>; 
console.warn(props);
console.warn(menuDeleteOn);
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Header {...props} source={sources} />
      </View>
      <View style={styles.container_content}>
        <View style={styles.container_content_row1}>
          <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={props.photos}
            ListEmptyComponent={<Text style={styles.wrapper}>NO PHOTOS</Text>}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground
                  resizeMode= 'contain'
                  style={styles.wrapper}
                  source={{ uri: item.uri }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.container_content_row2}>
          {props.deleteStatus? deleteMenuOn : deleteMenuOff} 
          <TouchableOpacity>
            <Image
              style={styles.container_content_row2_icons}
              source={require("../../../assets/album/Recurso_75.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.container_content_row2_icons}
              source={require("../../../assets/album/Recurso_76.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.container_content_row2_icons}
              source={require("../../../assets/album/Recurso_77.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            // onPress={menuDeleteOn}
            > 
            <Image
              style={styles.container_content_row2_icons}
              source={require("../../../assets/album/Recurso_78.png")}
            />
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
    height: "85%"
  },
  container_content_row1: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: 'center',
    height: "80%",
    
    flexDirection: "row"
  },

  container_content_row2: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: "20%",
    flexDirection: "row"
  },
  container_content_row2_icons: {
    width: 50,
    height: 50
  },
  wrapper: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    
    
  }
});

export default AlbumLayout;
