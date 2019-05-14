import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/home/containers/home";
import Load from "./src/screens/load/containers/load";
import Library from "./src/screens/library/containers/library";



import AppNavigator from "./src/routes/router"

export default class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ isLoading: false });
      }.bind(this),
      3000
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Load />;
    } else {
      return <AppNavigator></AppNavigator>;
    }
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
