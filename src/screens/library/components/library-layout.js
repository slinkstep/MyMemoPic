import React from "react";
import WINDOW from "../../../constants/layout";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Header from "../../../components/header";
import ListAlbums from "./list-albums";

const LibraryLayout = props => {
  

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Header {...props} source={sources} />
      </View>
      <View style={styles.container_content}>
        <View style={styles.content_row1}>
          <Image style={styles.content_row1_icon1} source={sources.icon1} />
          <Image style={styles.content_row1_icon2} source={sources.icon2} />
        </View>
        <View style={styles.content_row2}>
          <ListAlbums covers={props.covers} />
        </View>
        <View style={styles.content_row3}>
          <View style={styles.content_row3_col1}>
            <Image style={styles.content_row3_icon1} source={sources.icon3} />
          </View>
          <View style={styles.content_row3_col2}>
            <TouchableOpacity onPress={() => props.createAlbum()} >
              <Image style={styles.content_row3_icon2} source={sources.icon5} />
            </TouchableOpacity>
          </View>
          <View style={styles.content_row3_col3}>
            <Image style={styles.content_row3_icon3} source={sources.icon4}  />
          </View>
        </View>
      </View>
    </View>
  );
};

const sources = {
  logo1: require("../../../assets/library/Recurso_68.png"),
  logo2: require("../../../assets/library/Recurso_69.png"),
  logo3: require("../../../assets/library/Recurso_70.png"),
  logo4: require("../../../assets/library/Recurso_73.png"),
  icon1: require("../../../assets/library/Recurso_64.png"),
  icon2: require("../../../assets/library/Recurso_65.png"),
  icon3: require("../../../assets/library/Recurso_66.png"),
  icon4: require("../../../assets/library/Recurso_67.png"),
  icon5: require("../../../assets/library/Recurso_74.png")
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
    height: "85%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  content_row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%",
    marginTop: 10
  },
  content_row1_icon1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    resizeMode: "contain",
    height: "99%"
  },
  content_row1_icon2: {
    height: "99%",
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  content_row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%",
    justifyContent:'center',
    alignItems: 'center'
  },

  content_row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#DDDBDB",
    width: "90%",
    height: "30%",
    marginBottom: 10
  },
  content_row3_col1: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%"
  },
  content_row3_col2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%"
  },
  content_row3_col3: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%"
  },
  content_row3_icon1: {
    height: "40%",
    width:"90%",
    resizeMode: 'contain',
   

  },
  content_row3_icon2: {
    width: 90,
    height: 90,
    resizeMode: 'contain'
  },
  content_row3_icon3: {
    width: 80,
    height: 100,
    resizeMode: 'contain'
  }
});

export default LibraryLayout;
