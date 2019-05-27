import React, { Component } from "react";


import { withNavigation } from 'react-navigation';
import InfoLayout from "../components/info-layout";

class Info extends Component {

  
  render() {
    return <InfoLayout></InfoLayout>;
  }
}

export default withNavigation(Info);
