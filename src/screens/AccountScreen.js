import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
    
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={{alignSelf: 'center'}}>Account</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20}/>,
}

const styles = StyleSheet.create({});

export default AccountScreen;