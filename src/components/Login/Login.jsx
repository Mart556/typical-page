import { useState, useEffect, useReducer } from 'react';

import './Login.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return { value: action.val, isValid: action.val.includes('@') };
        case 'INPUT_BLUR':
            return { value: state.value, isValid: state.value.includes('@') };
        default:
            return { value: '', isValid: false };
    }
}

const passwordReducer = (state, action) => {
    console.log('Password Reducer');
    switch (action.type) {
        case 'USER_INPUT':
            return { value: action.val, isValid: action.val.trim().length > 6 };
        case 'INPUT_BLUR':
            return { value: state.value, isValid: state.value.trim().length > 6 };
        default:
            return { value: '', isValid: false };
    }
}

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
        setFormIsValid(
           emailState.isValid && passwordState.isValid
        );
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

        setFormIsValid(
            emailState.isValid && passwordState.isValid
         );
    }

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });  
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('Checking form validity!');

            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }
        , 500);

        return () => {
            clearTimeout(timeOut);
        }
    }, [emailState.isValid, passwordState.isValid]);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
        console.log('Submitted!');
    }

    return (
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className={`control ${emailState.isValid === false? 'invalid' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                
                <div className={`control ${passwordState.isValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className="actions">
                    <Button type="submit" disabled={!formIsValid} >Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;