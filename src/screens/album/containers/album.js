import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { ImagePicker } from "expo";

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
    let { image } = this.state;

    return <AlbumLayout image={image} picker={this._pickImage}/>;
  }
}

export default Album;
