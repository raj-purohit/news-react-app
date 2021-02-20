import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { useGoogleLogin } from 'react-google-login'

import { URL_DASHBOARD } from "Helpers/Paths";
import { loginUser } from "Redux/Auth/Actions";
import Google_Icon from "Assets/Icons/google.svg";

import { LoginWrapper } from "./Login.style";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login() {
    const dispatch = useDispatch()
    const history = useHistory();

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        history.push(URL_DASHBOARD)
        dispatch(loginUser({
            userInfo : res.profileObj
        }))
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login`
        );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn : true,
        accessType : "offline",
    })

    return(
        <LoginWrapper>
            <button onClick={signIn} className="button">
                <img src={Google_Icon} alt="google login" className="icon"></img>
        
                <span className="buttonText">Sign in with Google</span>
            </button>
        </LoginWrapper>
    )
}

export default Login