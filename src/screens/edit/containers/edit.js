import React, { Component } from "react";


import EditLayout from "../components/edit-layout";



class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
          layoutProps: this.props.navigation.state.params
        }
      }

    
    addPhotos = () => {
        this.props.navigation.navigate("UpdatePhotos", this.state.layoutProps);
    }


  render() {
    
    

    return <EditLayout add={this.addPhotos} {...this.state.layoutProps}/>
  }
}


export default Edit;
