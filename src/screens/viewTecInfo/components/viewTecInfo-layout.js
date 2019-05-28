import React from "react";
import WINDOW from "../../../constants/layout";



import { View, Text, Image, StyleSheet } from "react-native";

const ViewTecInfoLayout = props => {
   
  return (
      
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>{props.title}</Text>
      </View>

      <View style={styles.image_container}>
        <Image style={styles.image} source={props.coverUri} />
      </View>

      <View style={styles.container_content}>
        <Text style={styles.container_content_titles}>
          Título: {props.title || `none`}
        </Text>
        <Text style={styles.container_content_titles}>
          Fecha de creación: {props.date || `none`}
        </Text>
        <Text style={styles.container_content_titles}>
          Número de fotos: {props.numPhotos || `none`}
        </Text>
        <Text style={styles.container_content_titles}>
          Editado por última vez: {props.date || `none`}
        </Text>
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
    height: "50%",

    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: "80%",
    height: "80%"
  },
  container_content: {
    width: "100%",
    flex: 1,
    justifyContent: "center"
  },

  container_content_titles: {
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    paddingVertical: 15,
    paddingHorizontal: 20
  }
});

export default ViewTecInfoLayout;
