import React from "react";

import {
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text
} from "react-native";

import {ACTIONS} from "../../../constants/actiontypes"

const ListAlbumsNew = props => {
  

  keyExtractor = (item,index)  => index.toString()
  
 

  return (

      
    
      <FlatList
        horizontal
        keyExtractor={this.keyExtractor}
        data={props.covers }
        ListEmptyComponent={<Text style={styles.wrapper}>NO ALBUMS</Text>}
      
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.nav(item) } >
            <ImageBackground style={styles.wrapper} source={item.coverUri}>
              <Text>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
        
      />
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    
  },
  image: {
    resizeMode: "contain"
  },
  wrapper: {
    width: 90,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ListAlbumsNew;
