import React, { Component } from "react";

import AlbumLayout from "../components/album-layout";
import { connect } from "react-redux";
import { Alert} from "react-native";
import { deleteAlbum, updatePhotos } from "../../../redux/actions/actions";
import { ACTIONS } from "../../../constants/actiontypes";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutProps: this.props.navigation.state.params
    };
  }

  nav = () => {
    this.props.navigation.navigate("Album");
  };

  navigateToTecInfo = (route, item) => {
    this.props.navigation.navigate(route, item);
  };

  delete = item => {
    Alert.alert(
      "ALERTA",
      "Está seguro de eliminar su albúm",
      [
        {
          text: "cancelar",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "sí",
          onPress: () => {
            let list = {};
            Object.keys(this.props.albums).map(key => {
              if (key != item.id) {
                list[key] = this.props.albums[key];
              }
            });

            this.props.deleteAlbum(ACTIONS.DELETE_ALBUM, list);
            this.props.navigation.navigate("Lib");
          }
        }
      ],
      { cancelable: false }
    );
  };

  deletePhoto = (album, photo) => {
    Alert.alert(
      "ALERTA",
      "Está seguro de eliminar su foto",
      [
        {
          text: "cancelar",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "sí",
          onPress: () => {
            let photosNew = [];
            oldPhothos = this.props.albums[album.id].photos;

            for (index = 0; index < oldPhothos.length; ++index) {
              if (oldPhothos[index].id != photo.id) {
                photosNew.push(oldPhothos[index]);
              }
            }


            let value = {
              id: album.id,
              photos: photosNew
            };

            this.props.updatePhotos(ACTIONS.UPDATE_PHOTOS, value);
            this.setState({ layoutProps: this.props.albums[album.id] });

           
          }
        }
      ],
      { cancelable: false }
    );
  };

  edit = (item) => {
 
    this.props.navigation.navigate("Edit", this.props.albums[item.id]);
  }

  render() {
    

    return (
      <AlbumLayout
        delete={this.delete}
        edit={this.edit}
        navigateToTecInfo={this.navigateToTecInfo}
        deletePhoto={this.deletePhoto}
        {...this.state.layoutProps}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    title: state.currentAlbum.title,
    albums: state.newAlbum.listAlbums
  };
};

mapDispatchToProps = dispatch => {
  return {
    deleteAlbum: (actionType, value) => dispatch(deleteAlbum(actionType, value)),
    updatePhotos: (actionType, value) => dispatch(updatePhotos(actionType, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
