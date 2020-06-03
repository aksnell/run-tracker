import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return { errorMessage: '', token: action.payload };
        case 'SIGNIN':
            return { errorMessage: '', token: action.payload };
        case 'SIGNOUT':
            return { token: null, errorMessage: ''};
        case 'ADD_ERROR':
           return {...state, errorMessage: action.payload};
        case 'CLEAR_ERROR_MESSAGE':
            return {...state, errorMessage: ''};
        default:
            return state;
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'SIGNUP', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with Sign Up!'});
    };
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'SIGNIN', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with Sign In!'});
    };
};


const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'SIGNIN', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    };
}


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGNOUT' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer, 
    {signup, signin, signout, clearErrorMessage, tryLocalSignin}, 
    { isSignedIn: false, errorMessage: '' }
);