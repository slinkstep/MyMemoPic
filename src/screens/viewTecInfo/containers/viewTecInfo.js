import React, { Component } from "react";

import ViewTecInfoLayout from "../components/viewTecInfo-layout";



class ViewTecInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          layoutProps: this.props.navigation.state.params
        }
      }

    
 


  render() {
    
    

    return <ViewTecInfoLayout {...this.state.layoutProps}></ViewTecInfoLayout>
  }
}


export default ViewTecInfo;
