import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import Spacer from './Spacer';


const Link = ({navigation, label, route}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <Spacer>
                <Text style={styles.link}>{label}</Text>
            </Spacer>
        </TouchableOpacity>
    );
}

styles = StyleSheet.create({
    link: {
        color: 'blue',
    }
});

export default withNavigation(Link);