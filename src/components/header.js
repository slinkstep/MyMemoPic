import React from "react";
import WINDOW from "../constants/layout";



import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
const Header = props => {

  console.log(props)
  return (
    <View style={styles.maincontainer}>
      
<View style={styles.container}>
      <View>
        <TouchableOpacity
        onPress={() =>props.nav()}
        >
          <Image
            source={props.source.logo1}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.right}>
      <TouchableOpacity>
          <Image
            source={props.source.logo2}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={props.source.logo3}
            style={styles.logo}
          />
        </TouchableOpacity>
      
      </View>

      </View>

      <Image
      source={props.source.logo4}
      style={styles.logotitle}
      >

      </Image>
      
    </View>
  );
};

const styles = StyleSheet.create({
    maincontainer:{
        height: 90,
        width: "100%",
        alignItems: "center",

    },
  logo: {
    height: "100%",
    width: 60,
    paddingLeft: 40,
    resizeMode: "contain"
  },
  logotitle: {
    height: "60%",
    width: 120,
    resizeMode: "contain",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 50,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  right:{
        
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
}
});

export default Header;
