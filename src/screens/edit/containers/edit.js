import React, { Component } from "react";


import EditLayout from "../components/edit-layout";



class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
          layoutProps: this.props.navigation.state.params
        }
      }

    
 


  render() {
    
    

    return <EditLayout {...this.state.layoutProps}/>
  }
}


export default Edit;
