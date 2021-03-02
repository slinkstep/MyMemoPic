import React, { Component } from 'react';
import SelectCoverLayout from '../components/selectCover-layout';

import { connect } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { Linking } from 'expo';
import * as Permissions from 'expo-permissions';
import { setSelectedCover, setID, setNewAlbum, setCover } from '../../../redux/actions/actions';

import createUUID from '../../../utils/UUID';

import { ACTIONS } from '../../../constants/actiontypes';

import { CAMERA_PERMISSIONS } from '../../../constants/constants';

class SelectCover extends Component {
	UNSAFE_componentWillMount() {
		this.props.setCover(ACTIONS.SET_COVER, 0);
	}

	// enablePermissions = () => {
	// 	Alert.alert(
	// 		CAMERA_PERMISSIONS.TITLE,
	// 		CAMERA_PERMISSIONS.MESSAGE,
	// 		[
	// 			{
	// 				text: CAMERA_PERMISSIONS.CANCEL_BUTTON,
	// 				onPress: () => {},
	// 				style: 'cancel'
	// 			},
	// 			{
	// 				text: CAMERA_PERMISSIONS.ALLOW_BUTTON,
	// 				onPress: () =>
	// 					Platform.OS === 'android' ? this.getCameraPermissions() : Linking.openURL('app-settings:')
	// 			}
	// 		],
	// 		{ cancelable: false }
	// 	);
	// };

	// getCameraPermissions = async () => {
	// 	const camera = await Permissions.askAsync(Permissions.CAMERA);
	// 	const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
	// 	return camera.status === 'granted' && cameraRoll.status === 'granted';
	// };

	library = async () => {
		// const status = await this.getCameraPermissions();
		// if (status) {
		// 	this.props.navigation.navigate('SelectPhotos');
		// } else {
		// 	this.enablePermissions();
		// }

		this.props.setID(ACTIONS.SET_ID, createUUID());
		this.props.navigation.navigate('SelectPhotos');
	};

	render() {
		// console.log(this.props)

		const layoutProps = {
			keyExtractor: this.keyExtractor,
			onPress: this.props.selectCover,
			selected: this.props.selectedCover,
			coverUri: this.props.coverUri,
			title: this.props.title,
			navLogo2: this.library
		};

		return <SelectCoverLayout {...layoutProps} />;
	}
}

mapStateToProps = (state) => {
	return {
		selectedCover: state.currentAlbum.cover,
		coverUri: state.currentAlbum.coverUri,
		title: state.currentAlbum.title,
		id: state.currentAlbum.id,
		albums: state.newAlbum.listAlbums
	};
};

mapDispatchToProps = (dispatch) => {
	return {
		selectCover: (actionType, value) => dispatch(setSelectedCover(actionType, value)),
		setID: (actionType, value) => dispatch(setID(actionType, value)),
		setNewAlbum: (actionType, value) => dispatch(setNewAlbum(actionType, value)),
		setCover: (actionType, value) => dispatch(setCover(actionType, value))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCover);
