import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { ImagePicker } from "expo";
import { connect } from 'react-redux';

class Album extends Component {

    state = {
        image: null
      };
    

    _pickImage = async () => {
       
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true
        });
      
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };
      
     


  render() {
    const layoutprops = {

      title: this.props.title
        
    }

    let { image } = this.state;

    return <AlbumLayout image={image} picker={this._pickImage} {...layoutprops}/>;
  }
}

mapStateToProps = (state) => {
  return {
      title: state.currentAlbum.title,
  }
}

mapDispatchToProps = (dispatch) => {
  return {
      saveTitle: (actionType, value) => dispatch(setTitle(actionType, value)),
      setDate: (actionType, value) => dispatch(setDate(actionType, value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Album);
