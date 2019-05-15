import React from "react";

import { FlatList, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const ListAlbums = (props) => {

    state={
        list: [
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png"),
          require("../../../assets/library/Recurso_72.png")
        ]
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
        renderItem={({item}) => <Image source={item}></Image>}
      />
   
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
