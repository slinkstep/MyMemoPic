import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from 'react-redux';


class Album extends Component {
 
  nav = () => {
    this.props.navigation.navigate("Album");
  }

  render() {

    const layoutProps = this.props.navigation.state.params

    console.log(layoutProps)
    
    
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


export default connect(mapStateToProps, mapDispatchToProps) (Album);
