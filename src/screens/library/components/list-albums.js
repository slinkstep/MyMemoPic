import React from "react";

import { FlatList, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const ListAlbums = (props) => {

    state={
        list: []
    }


  return (
    <View>
      <FlatList
        horizontal
        // keyExtractor={this.keyExtractor}
        data={this.state.list}
        // ListEmptyComponent={this.renderEmpty}
        // ItemSeparatorComponent={this.itemSeparator}
        // renderItem={this.renderItem}
      />
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require("../../../assets/library/Recurso_74.png")}
       />
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    image: {
        width: 50,
        height: 50
    }

})

export default ListAlbums;
