import React, { useContext, useEffect } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import Link from '../components/Link';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                title='Sign Up For Tracker'
                errorMessage={state.errorMessage}
                buttonLabel='Sign Up'
                onSubmit={signup}
            />
            <Link
                label='Already have an account? Sign in instead.'
                route='Signin'
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;