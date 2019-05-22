import React, { Component } from "react";
import LibraryLayout from "../components/library-layout";

import { connect } from 'react-redux';

import { setTitle } from '../../../redux/actions/actions';

import {ACTIONS} from '../../../constants/actiontypes'


class Library extends Component {

  
  
  keyExtractor = (item, index) => {
    return index.toString();
 }
  

  metodo = () => {

    this.props.navigation.navigate('Info')
  }
  
  createAlbum = () => {
   
    this.props.navigation.navigate('TecInfo')
  }

 
  render() {
    
    console.log(this.props)
    const layoutProps = {
      nav: this.metodo,
      createAlbum: this.createAlbum,
      title: "Mis álbumes",
      sources: {},
      keyExtractor: this.keyExtractor,
      covers: this.props.albums

    }
    
    return <LibraryLayout {...layoutProps}/>;
  }
}

mapStateToProps = (state) => {
  return {
      title: state.currentAlbum.title,
      albums: state.newAlbum.listAlbums
   
  }
}

mapDispatchToProps = (dispatch) => {
  return {
      saveTitle: (actionType, value) => dispatch(setTitle(actionType, value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Library);
