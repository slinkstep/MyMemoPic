import React from "react";
import WINDOW from "../../../constants/layout";

import { View, Text, Image,ScrollView, StyleSheet } from "react-native";

import {
 
  DotIndicator,

} from 'react-native-indicators';

const InfoLayout = props => {
  return (
    <View style={styles.container}>
      <DotIndicator style={styles.balls} color='gray'></DotIndicator>
      <View style={styles.row1}>
        <Text style={styles.titleQuestion}>¿Como funciona </Text>
        <Text style={[styles.titleMy, styles.titleQuestion]}>My</Text>
        <Text style={[styles.titleMemo, styles.titleQuestion]}>Memo</Text>
        <Text style={[styles.titlePic, styles.titleQuestion]}>Pic</Text>
        <Text style={styles.titleQuestion}> ?</Text>
      </View>
      <View style={styles.row2}>
        <ScrollView>
          <View style={styles.cardGray}>
            <Text style={styles.cardGrayText}>MyMemoPic es una aplicacion que permite hacer 
            un libro (album) o varios de tus mejores 
            recuerdos guardados en tu celular como imagenes. 
            No solo somos una galería, somos la mejor aplicacion
             para guardar, revivir y explorar nuestros mejores recuedos</Text>
          </View>
          <View style={styles.cardWhite}>
            <Text style={styles.cardWhiteText}> En MyMemoPic para crear un album solo necestas 
            entrar a la biblioteca y seleccionar el boton '+'; Luego de colocar el nombre 
            de tu album y de seleccionar un estilo de portada, puedes seleccionar las imagenes del album  y listo... 
            tu nuevo album de recuerdos estará listo</Text>
          </View>
        </ScrollView>
      </View>
        <Text></Text>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW.STATUS_BAR_HEIGHT,
    backgroundColor: "white",
    width: "100%",
    
  },
  row1: {
    flex: 2, 
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent:'center',
  },
  row2: {
    flex: 30, 
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent:'center',
  },
  titleQuestion: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:25,
    textAlign: 'justify',
  },
  titleMy:{
    color:'yellow',
  },
  titleMemo:{
    color:'green',
  },
  titlePic:{
    color:'red',
  },
  cardGray:{
    flex:1,
    margin:10,
    backgroundColor:'gray',
  },
  cardGrayText:{
    color:'white',
    textAlign: 'justify',
    fontSize:20,
  },
  cardWhite:{
    flex:1,
    margin:10,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },
  cardWhiteText:{
    color:'gray',
    textAlign: 'justify',
    fontSize:20,
  },
});

export default InfoLayout;
