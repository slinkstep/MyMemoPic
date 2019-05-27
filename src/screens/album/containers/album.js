import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from 'react-redux';


class Album extends Component {
  
  state = {
    deleteStatus: false
  };
  nav = () => {
    this.props.navigation.navigate("Album");
  }

  render() {

    const layoutProps = this.props.navigation.state.params

    console.log(layoutProps)
    
    layoutProps.deleteAlbum = this.deleteAlbum
    layoutProps.menuDeleteOn = this.menuDeleteOn
    layoutProps.menuDeleteOff = this.menuDeleteOff
    layoutProps.deleteStatus = this.state.deleteStatus
    
    return <AlbumLayout {...layoutProps} />;
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

deleteAlbum  = () => {

}

menuDeleteOn = () => {
  this.setState({ deleteStatus: true });
}

menuDeleteOff = () => {
  this.setState({ deleteStatus: false });
}

export default connect(mapStateToProps, mapDispatchToProps) (Album);
