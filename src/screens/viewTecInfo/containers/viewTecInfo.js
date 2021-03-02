import React, { Component } from "react";

import ViewTecInfoLayout from "../components/viewTecInfo-layout";
import { connect } from 'react-redux';


class ViewTecInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          layoutProps: this.props.albums[props.navigation.state.params.id]
        }
      }

    
 


  render() {
    
    

    return <ViewTecInfoLayout {...this.state.layoutProps}></ViewTecInfoLayout>
  }
}


mapStateToProps = (state) => {
  return {
     
      albums: state.newAlbum.listAlbums,
  
   
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (ViewTecInfo);
