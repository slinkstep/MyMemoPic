import React, { Component } from "react";

import { connect } from "react-redux";
import { ImageBrowser } from "expo-multiple-imagepicker";

import {
    updatePhotos
} from "../../../redux/actions/actions";

import createUUID from "../../../utils/UUID";
import { ACTIONS } from "../../../constants/actiontypes";

class UpdatePhotos extends Component {

   
    constructor(props) {
        super(props);
        this.state = {
          album: this.props.navigation.state.params
        }
      }

    
 
  


  imageBrowserCallback = callback => {
    callback
      .then(photos => {
        let list=this.props.albums[this.state.album.id].photos
        
        Object.keys(photos).map(key => {
          let object = {
            id: createUUID(),
            uri: photos[key].file
          };

          list.push(object)

          let value = {
            id: this.state.album.id,
            photos: list
          };

          this.props.updatePhotos(ACTIONS.UPDATE_PHOTOS, value);

          this.props.navigation.navigate("Album", this.props.albums[this.state.album.id]);
          
        });

      })
      .catch(e => console.log(e));

     
   
  };

  render() {
    
    return <ImageBrowser max={40} callback={this.imageBrowserCallback} />;
  }
}

mapStateToProps = state => {
  return {
    albums: state.newAlbum.listAlbums,
    
  };
};

mapDispatchToProps = dispatch => {
  return {
    updatePhotos: (actionType, value) => dispatch(updatePhotos(actionType, value))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UpdatePhotos);
