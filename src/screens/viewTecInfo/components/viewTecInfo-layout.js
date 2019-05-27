import React from "react";
import WINDOW from "../../../constants/layout";

import { ACTIONS } from "../../../constants/actiontypes";

import {
  View,
  Text,
  Image,
  StyleSheet,

} from "react-native";



const ViewTecInfoLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.container_content}>
        <View style={styles.container_content_image}>
          <Image
            style={styles.container_content_imagebook}
            source={require("../../../assets/tecInfo/Recurso_93.png")}
          />
        </View>

        <Text style={styles.container_content_titles}>
          Fecha de creación: {props.date || `none`}
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
  container_header: {
    width: "100%",
    height: "15%"
  },
  container_content: {
    width: "100%",
    height: "85%"
  },
  container_content_image: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  container_content_imagebook: {
    resizeMode: "contain"
  },
  container_content_text: {},
  container_content_titles: {
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  container_content_input: {
    flexDirection: "row",
    alignItems: "center"
  },
  container_content_inputBox: {
    height: "60%",
    width: "50%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5
  }
});

export default ViewTecInfoLayout;
