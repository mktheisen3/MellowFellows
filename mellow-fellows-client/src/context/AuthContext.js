import createDataContext from './createDataContext';
import mfAPI from '../api/mellow-fellows';
import history from '../history';

const authReducer = (state, action) => {

    switch(action.type) {

        case 'add_error': return { ...state, errorMessage: action.payload };
        case 'signin': return { token: action.payload, errorMessage: '' };
        case 'signout': return { token: null, errorMessage: '' };
        case 'clear_error': return { ...state, errorMessage: '' };
        default: return state;

    };

};

const clearErrMessage = dispatch => () => { 
    dispatch({ type: 'clear_error' });
}

const tryLocalSignin = dispatch => async () => {

    const token = await localStorage.getItem("token");

    if (token) {
        dispatch({ type: 'signin', payload: token });
        history.push('/');
    } else {
        history.push('/');
    }

}

const signup = dispatch =>  async ({ email, password }) => { 
    try {

        const response = await mfAPI.post('/signup', { email, password });
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        history.push('/');

    } catch (err) {

        dispatch({ type: 'add_error', payload: 'Something went wrong with signup' });

    }
};


const signin = dispatch => async ({ email, password }) => { 
    try {

        const response = await mfAPI.post('/signin', { email, password });
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        
        history.push('/');

    } catch (err) {

        dispatch({ type: 'add_error', payload: 'Something went wrong with signin' });

    }
};

const signout = dispatch => async () => {

    await localStorage.removeItem("token");
    dispatch({ type: 'signout' });
    history.push('/signin');

};

export const { Context, Provider } = createDataContext(
    authReducer, 
    { signup, signin, signout, clearErrMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);