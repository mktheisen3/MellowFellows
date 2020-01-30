import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import './Signup.css';
import { Context as AuthContext } from '../../../context/AuthContext';
import { updateObject, checkValidity } from '../../../shared/utility';

const Signup = () => {
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
        },
        confirmPassword: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Confirm Password'
            },
            value: '',
            validation: {
                required: true,
                passwordMatch: true   
            },
            valid: false,
            touched: false
        }
    });

    const { state, signup } = useContext(AuthContext);

    const inputChangedHandler = ( event, controlName ) => {

        let updatedControls = []

        if (controlName === 'confirmPassword'){
            updatedControls = updateObject( controls, {
                [controlName]: updateObject( controls[controlName], {
                    value: event.target.value,
                    valid: checkValidity( event.target.value, controls[controlName].validation, controls.password.value ),
                    touched: true
                } )
            } );
        } else {
            updatedControls = updateObject( controls, {
                [controlName]: updateObject( controls[controlName], {
                    value: event.target.value,
                    valid: checkValidity( event.target.value, controls[controlName].validation, '' ),
                    touched: true
                } )
            } );
        }

        setControls(updatedControls);
    }

    let formElementsArray = [];
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

    const [isSignin, setIsSignin] = useState(false);

    let signinRedirect = null;
    const switchAuthModeHandler = () => {
        setIsSignin(!isSignin);
    }

    const submitHandler = ( event ) => {
        event.preventDefault();
        const credentials = {
            email: controls["email"].value,
            password: controls["password"].value
        }
        signup(credentials);
    }

    return (
        <div className="Auth">
            {isSignin ? signinRedirect = <Redirect to='/signin' /> : null}
            {signinRedirect}
            <form onSubmit={submitHandler}>
                <div className="Title">CREATE AN ACCOUNT:</div>
                {form}
                {errorMessage}
                <Button>CREATE</Button>
            </form>
            <Button clicked={switchAuthModeHandler}>ALREADY HAVE AN ACCOUNT?</Button>
        </div>
    );
}

export default Signup;