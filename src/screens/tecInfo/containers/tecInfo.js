import React, { Component } from "react";
import TecInfoLayout from "../components/tecInfo-layout";

import { connect } from 'react-redux';

import { setTitle, setDate } from '../../../redux/actions/actions';

import {ACTIONS} from '../../../constants/actiontypes'



class TecInfo extends Component {

    componentDidMount(){
        
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        this.props.setDate(ACTIONS.SET_DATE,`${date}/${month}/${year}`)
    }
 
    componentWillMount(){
        this.props.saveTitle(ACTIONS.SET_TITLE,"")
    }

    selectCover = () => {
   
        this.props.navigation.navigate('SelectCover')


      }


  render() {
    
    const layoutProps = {
        saveTitle: this.props.saveTitle,
        title: this.props.title,
        date: this.props.date,
        numPhotos: this.props.numPhotos,
        navLogo2: this.selectCover
    }

    return <TecInfoLayout {...layoutProps}></TecInfoLayout>
  }
}

mapStateToProps = (state) => {
    return {
        title: state.currentAlbum.title,
        date: state.currentAlbum.date,
        numPhotos: state.currentAlbum.numPhotos
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        saveTitle: (actionType, value) => dispatch(setTitle(actionType, value)),
        setDate: (actionType, value) => dispatch(setDate(actionType, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TecInfo);
