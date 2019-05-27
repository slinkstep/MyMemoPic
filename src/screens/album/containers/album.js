import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from 'react-redux';


class Album extends Component {
 
  nav = () => {
    this.props.navigation.navigate("Album");
  }

  navigateToTecInfo = (route,item) => {
    this.props.navigation.navigate(route,item);
  }

  render() {

    const layoutProps = this.props.navigation.state.params

    console.log(layoutProps)
    
    
    return <AlbumLayout navigateToTecInfo= {this.navigateToTecInfo} {...layoutProps} />;
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
