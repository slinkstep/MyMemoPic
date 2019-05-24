import React, { Component } from "react";
import LibraryLayout from "../components/library-layout";

import { connect } from 'react-redux';

import { setTitle } from '../../../redux/actions/actions';

import {ACTIONS} from '../../../constants/actiontypes'


class Library extends Component {

  componentDidMount(){
    
  }
  
  keyExtractor = (item, index) => {
    return index.toString();
 }
  

  metodo = () => {

    this.props.navigation.navigate('Info')
  }
  
  createAlbum = () => {
   
    this.props.navigation.navigate('TecInfo')
  }

  mapAlbums = () => {
    let list=[]
    Object.keys(this.props.albums).map(key => {
      list.push(this.props.albums[key])
    })

    return list
  }

 
  render() {
    
    console.log(this.props)
    const layoutProps = {
      nav: this.metodo,
      createAlbum: this.createAlbum,
      title: "Mis álbumes",
      sources: {},
      keyExtractor: this.keyExtractor,
      covers: this.mapAlbums()

    }
    
    return <LibraryLayout {...layoutProps}/>;
  }
}

mapStateToProps = (state) => {
  return {
      title: state.currentAlbum.title,
      albums: state.newAlbum.listAlbums,
      coverUri: state.currentAlbum.coverUri,
      photos: state.currentAlbum.photos
   
  }
}

mapDispatchToProps = (dispatch) => {
  return {
      saveTitle: (actionType, value) => dispatch(setTitle(actionType, value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Library);
