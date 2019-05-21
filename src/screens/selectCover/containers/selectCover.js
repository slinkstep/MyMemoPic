import React, { Component } from "react";
import SelectCoverLayout  from "../components/selectCover-layout";

import { connect } from 'react-redux';

import { setSelectedCover } from '../../../redux/actions/actions';



class SelectCover extends Component {

 
  
  render() {

    console.log(this.props)

    const layoutProps = {
        keyExtractor: this.keyExtractor,
        onPress: this.props.selectCover,
        selected: this.props.selectedCover,
        coverUri: this.props.coverUri,
        title: this.props.title
    }
    
    
    return <SelectCoverLayout {...layoutProps}></SelectCoverLayout>
  }
}

mapStateToProps = (state) => {
    return {
        selectedCover: state.currentAlbum.cover,
        coverUri: state.currentAlbum.coverUri,
        title: state.currentAlbum.title,
     
    }
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
        selectCover: (actionType, value) => dispatch(setSelectedCover(actionType, value))
    }
  }

export default  connect(mapStateToProps, mapDispatchToProps) (SelectCover);
