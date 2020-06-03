import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import Link from '../components/Link';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                title='Sign In To Tracker'
                errorMessage={state.errorMessage}
                buttonLabel='Sign In'
                onSubmit={signin}
            />
            <Link
                label="Don't have an account? Sign up instead!"
                route='Signup'
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
    }
});

export default SigninScreen;