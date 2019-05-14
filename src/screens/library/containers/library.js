import React, { Component } from "react";
import LibraryLayout from "../components/library-layout";



class Library extends Component {

  metodo = () => {

    this.props.navigation.navigate('Info')
  }
  
  render() {
    console.log(this.props)
    return <LibraryLayout nav={this.metodo} />;
  }
}

export default Library;
