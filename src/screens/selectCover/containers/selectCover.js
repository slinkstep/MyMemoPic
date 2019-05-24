import React, { Component } from "react";
import SelectCoverLayout  from "../components/selectCover-layout";

import { connect } from 'react-redux';

import { setSelectedCover, setID, setNewAlbum } from '../../../redux/actions/actions';

import createUUID from "../../../utils/UUID";

import {ACTIONS} from "../../../constants/actiontypes"

class SelectCover extends Component {

  library = () => {

    this.props.setID(ACTIONS.SET_ID, createUUID())

    this.props.setNewAlbum(ACTIONS.SET_NEW_ALBUM, {
      id: this.props.id,
      coverUri: this.props.coverUri,
      title: this.props.title,
    } 
    )

   
    
    this.props.navigation.navigate('Prueba')

    
  }
  
  render() {

    console.log(this.props)

    const layoutProps = {
        keyExtractor: this.keyExtractor,
        onPress: this.props.selectCover,
        selected: this.props.selectedCover,
        coverUri: this.props.coverUri,
        title: this.props.title,
        navLogo2: this.library
    }
    
    
    return <SelectCoverLayout {...layoutProps}></SelectCoverLayout>
  }
}

mapStateToProps = (state) => {
    return {
        selectedCover: state.currentAlbum.cover,
        coverUri: state.currentAlbum.coverUri,
        title: state.currentAlbum.title,
        id: state.currentAlbum.id,
        albums: state.newAlbum.listAlbums
     
    }
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
        selectCover: (actionType, value) => dispatch(setSelectedCover(actionType, value)),
        setID: (actionType, value) => dispatch(setID(actionType, value)),
        setNewAlbum: (actionType, value) => dispatch(setNewAlbum(actionType, value)),

    }
  }

export default  connect(mapStateToProps, mapDispatchToProps) (SelectCover);
