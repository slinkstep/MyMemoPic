import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const EditLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>{props.title}</Text>
      </View>

      <View style={styles.image_container}>
        <Image style={styles.image} source={props.coverUri} />
      </View>

      <View style={styles.container_content}>
        <TouchableOpacity 
        onPress={() => {props.add()}}
        style={styles.button}>
          <Text style={styles.text}>Agregar Fotos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Editar Portada</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  title: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center"
  },

  title_text: {
    fontWeight: "bold",
    color: "#E8703B",
    fontSize: 32,
    fontFamily: "sans-serif-medium"
  },
  image_container: {
    width: "100%",
    height: "60%",

    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: "90%",
    height: "90%"
  },
  container_content: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },

  text: {
    fontFamily: "sans-serif-medium",
    fontSize: 20,
    color: "white"
  },
  button: {
    backgroundColor: "#E8703B",
    width: 180,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

export default EditLayout;
