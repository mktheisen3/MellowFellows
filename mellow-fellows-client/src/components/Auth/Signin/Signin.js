import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import './Signin.css';
import { Context as AuthContext } from '../../../context/AuthContext';
import { updateObject, checkValidity } from '../../../shared/utility';

const Signin = () => {
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    const { state, signin } = useContext(AuthContext);

    const inputChangedHandler = ( event, controlName ) => {

        const updatedControls = updateObject( controls, {
            [controlName]: updateObject( controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, controls[controlName].validation, '' ),
                touched: true
            } )
        } );

        setControls(updatedControls);
    }

    const formElementsArray = [];
    for ( let key in controls ) {
        formElementsArray.push( {
            id: key,
            config: controls[key]
        } );
    }

    let form = formElementsArray.map( formElement => (
        <Input
            className="InputField"
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={( event ) => inputChangedHandler( event, formElement.id )} />
    ) );

    let errorMessage = null;

    if ( state.errorMessage ) {
        errorMessage = (
            <p style={{color: "red"}}>{state.errorMessage}</p>
        );
    }

    const [isSignup, setIsSignup] = useState(false);

    let signupRedirect = null;
    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup);
    }

    const submitHandler = ( event ) => {
        event.preventDefault();
        const credentials = {
            email: controls["email"].value,
            password: controls["password"].value
        }
        signin(credentials);
    }

    return (
        <div className="Auth">
            {isSignup ? signupRedirect = <Redirect to='/signup' /> : null}
            {signupRedirect}
            <form onSubmit={submitHandler}>
                <div className="Title">LOGIN:</div>
                {form}
                {errorMessage}
                <Button>LOGIN</Button>
            </form>
            <Button clicked={switchAuthModeHandler}>CREATE AN ACCOUNT</Button>
        </div>
    );
}

export default Signin;