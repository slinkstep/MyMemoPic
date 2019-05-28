import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from 'react-redux';

import {deleteAlbum} from '../../../redux/actions/actions'
import {ACTIONS} from '../../../constants/actiontypes'


class Album extends Component {
 
  nav = () => {
    this.props.navigation.navigate("Album");
  }

  navigateToTecInfo = (route,item) => {
    this.props.navigation.navigate(route,item);
  }


  delete = (item) => {

    let list={}
    Object.keys(this.props.albums).map(key => {
    
    if(key!=item.id){
      list[key]=this.props.albums[key]
    }
    })

    
    this.props.deleteAlbum(ACTIONS.DELETE_ALBUM,list)
    this.props.navigation.navigate("Lib");
    
  }


  render() {

    const layoutProps = this.props.navigation.state.params

    console.log(layoutProps)
    
    
    return <AlbumLayout delete={this.delete} navigateToTecInfo= {this.navigateToTecInfo} {...layoutProps} />;
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
      deleteAlbum: (actionType, value) => dispatch(deleteAlbum(actionType, value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Album);
