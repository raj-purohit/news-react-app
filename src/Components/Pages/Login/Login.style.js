import styled from "styled-components";

export const LoginWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    height  : 100vh;
    
    .button {
        cursor: pointer;
        display: block;
        font-size: 1.3em;
        box-sizing: content-box;
        margin: 20px auto 0px;
        width: 70%;
        padding: 15px 20px;
        border-radius: 24px;
        border-color: transparent;
        background-color: white;
        /* box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.1); */
        box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.08);
        position: relative;
        max-width   : 500px;
    }

    .buttonText {
        color: #4285f4;
        font-weight: bolder;
    }

    .icon {
        height: 25px;
        width: 25px;
        margin-right: 0px;
        position: absolute;
        left: 30px;
        align-items: center;
    }
`