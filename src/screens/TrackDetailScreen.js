import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);    
    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id);
    return (
        <View>
            <Text h2 style={{alignSelf: 'center'}}>{state.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...track.locations[0].coords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
                <Circle
                    center={track.locations[0].coords}
                    radius={30}
                    strokeColor='rgba(158, 158, 255, 1.0)'
                    fillColor='rgba(158, 158, 255, 0.3)'
                />
                <Circle
                    center={track.locations[track.locations.length-1].coords}
                    radius={30}
                    strokeColor='rgba(158, 158, 255, 1.0)'
                    fillColor='rgba(158, 158, 255, 0.3)'
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default TrackDetailScreen;