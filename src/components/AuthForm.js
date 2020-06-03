import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({title, errorMessage, onSubmit, buttonLabel}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text h3>{title}</Text>
            <Spacer/>
            {errorMessage ? <View><Text style={styles.errorMessage}>{errorMessage}</Text></View> : <View><Text style={styles.errorMessage}></Text></View>}
            <Input 
                label={"Email"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer/>
            <Input 
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer/>
            <Spacer>
                <Button 
                    title={buttonLabel}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
}

stlyes = StyleSheet.create({
    errorMessage: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'red',
    }
});

export default AuthForm;