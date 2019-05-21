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

const ListAlbums = props => {
  

  keyExtractor = (item,index)  => index.toString()
  
  border = (item) => {
    return props.selected === item.id ? 'white' : 'green'
  }

  return (
    
      <FlatList
        horizontal
        keyExtractor={this.keyExtractor}
        data={props.covers}
        ListEmptyComponent={<Text style={styles.wrapper}>NO ALBUMS</Text>}
      
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.onPress(ACTIONS.SELECT_COVER,item.id) } >
            <ImageBackground style={[styles.wrapper, {borderColor: this.border(item)}]} source={item.source}>
              <Text>HI</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}

        extraData={props.selected}
        
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
    borderWidth: 2
  }
});

export default ListAlbums;
