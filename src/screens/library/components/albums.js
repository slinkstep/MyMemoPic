import React from "react";

import { View, Text, ImageBackground,StyleSheet } from "react-native";

const Category = props => {
  return (
    <ImageBackground 
    style={styles.wrapper}
    source={props.item}>
      
    </ImageBackground>
  );
};

export default Category;

const styles= StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {
            width: 5,
            height: 5,
        },
        textShadowRadius: 5 ,
        
    }
})
