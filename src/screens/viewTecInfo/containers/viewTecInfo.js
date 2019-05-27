import React, { Component } from "react";

import ViewTecInfoLayout from "../components/viewTecInfo-layout";



class ViewTecInfo extends Component {

    componentDidMount(){
        
        const layoutProps = this.props.navigation.state.params

        console.log(layoutProps)
        
    }
 
    componentWillMount(){
        
        
     
    }



  render() {
    
    const layoutProps = {
        
    }

    return <ViewTecInfoLayout></ViewTecInfoLayout>
  }
}


export default ViewTecInfo;
