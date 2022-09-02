import { useState } from "react";
import styled from "styled-components"
import login_bg from "../../assets/login_bg.svg";
import qr_img from "../../assets/qr_code.png";


const Login = () => {

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const inputHandler = (event: any) => {

        const inputValue = event.target.value;

        if (event.target.id === "email") {
            setEmailValue(inputValue);
        } else if (event.target.id === "password") {
            setPasswordValue(inputValue);
        }
    }

    return (
        <StyledLoginContainer>
            <StyledLoginQRWrapperForAnimation>
                <StyledLoginQRContainer>
                    <StyledForm className="form" onSubmit={(event) => event.preventDefault()}>
                        <h3>Welcome back!</h3>
                        <p>We're so excited to see you again!</p>

                        <div className="email-container">
                            <label htmlFor="email">EMAIL OR PHONE NUMBER</label>
                            <input type="email" name="email" id="email" value={emailValue} onChange={inputHandler} autoFocus />
                        </div>

                        <div className="password-container">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" id="password" value={passwordValue} onChange={inputHandler} />
                            <a href="#">Forgot your password?</a>
                        </div>

                        <button className="submit">Log In</button>
                        <p className="register">Need an account? <a href="/register">Register</a></p>
                    </StyledForm>

                    <StyledQRContainer>
                        <div className="qr-img">
                            <img src={qr_img} alt="qr_img" />
                        </div>
                        <h3>Log in with QR Code</h3>
                        <p>Scan this with <span>Discord mobile App</span> to log in instantly.</p>
                    </StyledQRContainer>

                </StyledLoginQRContainer>
            </StyledLoginQRWrapperForAnimation>

        </StyledLoginContainer>
    )
}

const StyledLoginContainer = styled.div`
    background-image: url(${login_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 100vh;
    width: 100%;
    display: flex;
`

const StyledLoginQRWrapperForAnimation = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 800px;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 540px) {
        width: 100%;
        height: 100vh;
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        width: 480px;
    }
`

const StyledLoginQRContainer = styled.div`
    background-color: var(--form-bg-color);
    padding: 3rem;
    height: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    gap: 7.5rem;
    box-shadow: 0px 0px 3px 1px rgb(54, 57, 62);
    animation: bounce 250ms ease 1;

    @keyframes bounce {
        0% {
            transform: translateY(-50%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 540px) {
        width: 100%;
        padding: 2rem;
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        width: 100%;
    }

`

const StyledForm = styled.form`

    flex-grow: 1;
    flex-basis: 100%;

    h3 {
        text-align: center;
        font-size: 2.4rem;
        font-weight: bolder;
    }

    p {
        color: rgb(185, 185, 185);
        font-size: 1.3rem;
        font-weight: 300;
        text-align: center;
        margin-top: 1rem;
    }

    .email-container, .password-container {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        label {
            font-size: 1.2rem;
            font-weight: 700;
            color: rgb(185, 185, 185);
            margin-bottom: 1rem;
        }
    
        input {
            background-color: var(--form-input-bg-color);
            border: none;
            padding: 1rem;  
            border-radius: 3px;
            outline: none;
            color: white;
        }
    }

    .password-container {
        a {
            font-size: 1.3rem;
            text-decoration: none;
            margin-top: 1rem;
            color: var(--form-link-color);
        }
    }


    .submit {
        background-color: var(--primary-font-color);
        color: white;
        border: none;
        outline: none;
        padding: 1.5rem;
        border-radius: 3px;
        margin-top: 2rem;
        width: 100%;
        font-size: 1.5rem;
        transition: background-color 200ms ease;
        :hover {
            cursor: pointer;
            background-color: var(--button-hover-color);
        }
    }

    .register {
        text-align: left;
        margin-top: 1rem;
        a {
            color: var(--form-link-color);
            text-decoration: none;
        }
    }
    @media only screen and (max-width: 540px) {
        /* display: none; */
        width: 100%;
    }
`

const StyledQRContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    align-items: center;
    .qr-img {
        padding:1rem;
        background-color: white;
        border-radius: 5px;
        width: 180px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }

    h3 {
        text-align: center;
        font-size: 2.5rem;
    }

    p {
        text-align: center;
        font-size: 1.4rem;
        color: rgb(185, 185, 185);
        span {
            font-weight: 700;
        }
    }
    @media only screen and (max-width: 540px) {
        display: none;
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        display: none;
    }
`

export default Login