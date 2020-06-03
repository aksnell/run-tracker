import React, { useContext } from 'react';
import { Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {  
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks}/>
            <FlatList
                data={state}
                keyExtractor={track => track._id}
                renderItem={({ item: { _id, name } }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TrackDetail', { _id })}
                        >
                            <ListItem chevron title={name}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Button
                title="Go to Track Detail"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({});

export default TrackListScreen;