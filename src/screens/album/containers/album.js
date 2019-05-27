import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from 'react-redux';
import { ACTIONS } from "../../../constants/actiontypes";


class Album extends Component {
  
  state = {
    deleteStatus: false
  };
  nav = () => {
    this.props.navigation.navigate("Album");
  }

  mapStateToProps = (state) => {
    return {
        title: state.currentAlbum.title,
        id: state.newAlbum.listAlbums.id
    }
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
        saveTitle: (actionType, value) => dispatch(setTitle(actionType, value)),
        setDate: (actionType, value) => dispatch(setDate(actionType, value)),
        deleteAlbum: (actionType,value) => dispatch(deleteAlbum(actionType,value)),
    }
  }
  
  deleteAlbum  = () => {
    this.props.deleteAlbum(ACTIONS.DELETE_ALBUM,{id: this.props.navigation.state.id})
  };
  
  menuDeleteOn = () => {
    console.warn(this);
    this.setState({ deleteStatus: true });
    // this.state.deleteStatus = true;
  };
  
  menuDeleteOff = () => {
    this.setState({ deleteStatus: false });
  }  

  render() {

    const layoutProps = this.props.navigation.state.params
    
    // layoutProps.deleteAlbum = this.deleteAlbum
    layoutProps.menuDeleteOn = this.menuDeleteOn
    layoutProps.menuDeleteOff = this.menuDeleteOff
    layoutProps.deleteStatus = this.state.deleteStatus
    
    console.warn(layoutProps)
    return <AlbumLayout {...layoutProps} menuDeleteOn={this.menuDeleteOn.bind(this)} />;
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Album);
