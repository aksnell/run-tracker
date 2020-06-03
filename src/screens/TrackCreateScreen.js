//import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    
    const { state: { recording }, setCurrentLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused || recording, setCurrentLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={{alignSelf: 'center'}}>Create a Track</Text>
            <Map/>
            { err ? <Text>Please enable location permissions to use this feature!</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20}/>,
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);