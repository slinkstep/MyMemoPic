import React, { Component } from "react";

import { connect } from "react-redux";
import { ImageBrowser } from "expo-image-picker-multiple";

import {
  setSelectedCover,
  setID,
  setNewAlbum,
  setPhotos
} from "../../../redux/actions/actions";

import createUUID from "../../../utils/UUID";

import { ACTIONS } from "../../../constants/actiontypes";

class SelectPhotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
          close: null,
        }
      }

    componentWillUnmount(){

        if(this.state.close == true){
        this.props.setNewAlbum(ACTIONS.SET_NEW_ALBUM, {
            id: this.props.id,
            coverUri: this.props.coverUri,
            title: this.props.title,
            photos: this.props.photos,
            date: this.props.date,
            numPhotos: this.props.numPhotos
          });
        }
      
     
    }


  imageBrowserCallback = callback => {
    callback
      .then(photos => {
       
        let list=[]
        Object.keys(photos).map(key => {
          let object = {
            id: createUUID(),
            uri: photos[key].file
          };

          list.push(object)
          
        });

        this.props.setPhotos(ACTIONS.SET_PHOTOS,list);
        if(photos.length != 0){
        this.setState({
          close: true,
      })
    }
        
      })
      .catch(e => console.log(e));

     
    this.props.navigation.navigate("Lib");
  };

  render() {
    
    return <ImageBrowser max={40} callback={this.imageBrowserCallback} />;
  }
}

mapStateToProps = state => {
  return {
    coverUri: state.currentAlbum.coverUri,
    title: state.currentAlbum.title,
    id: state.currentAlbum.id,
    photos: state.currentAlbum.photos,
    date: state.currentAlbum.date,
    albums: state.newAlbum.listAlbums,
    numPhotos: state.currentAlbum.numPhotos
  };
};

mapDispatchToProps = dispatch => {
  return {
    setID: (actionType, value) => dispatch(setID(actionType, value)),
    setNewAlbum: (actionType, value) => dispatch(setNewAlbum(actionType, value)),
    setPhotos: (actionType, value) => dispatch(setPhotos(actionType, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPhotos);
