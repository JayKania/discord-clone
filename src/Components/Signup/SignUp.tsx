import styled from "styled-components"
import signup_bg from "../../assets/login_bg.svg";

const SignUp = () => {
    return (
        <StyledSignUpContainer>
            <StyledSignUpFormContainerForAnimation>
                <StyledSignUpForm>
                    <h3>Create an account</h3>

                    <div className="email-container">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" autoFocus />
                    </div>

                    <div className="username-container">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div className="password-container">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="date-of-birth-container">
                        <div className="month-menu menu">
                            <div className="option-menu">
                                {/* <div className="option" id="option-0">January</div>
                                <div className="option" id="option-1">February</div>
                                <div className="option" id="option-2">March</div>
                                <div className="option" id="option-3">April</div>
                                <div className="option" id="option-4">May</div>
                                <div className="option" id="option-5">June</div>
                                <div className="option" id="option-6">July</div>
                                <div className="option" id="option-7">August</div>
                                <div className="option" id="option-8">September</div>
                                <div className="option" id="option-9">October</div>
                                <div className="option" id="option-10">November</div>
                                <div className="option" id="option-11">December</div> */}
                            </div>
                            <input type="text" name="month" id="month" className="month-input" placeholder="Month" />
                        </div>
                        <div className="day-menu menu">
                            <div className="option-menu">

                            </div>
                            <input type="text" name="day" id="day" className="day-input" placeholder="Day" />
                        </div>
                        <div className="year-menu menu">
                            <div className="option-menu">

                            </div>
                            <input type="text" name="year" id="year" className="year-input" placeholder="Year" />
                        </div>
                    </div>

                    <button className="submit">Continue</button>
                    <a className="existing-acc" href="#">Already have an account?</a>
                </StyledSignUpForm>
            </StyledSignUpFormContainerForAnimation>
        </StyledSignUpContainer>
    )
}

const StyledSignUpContainer = styled.div`
    background-image: url(${signup_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 100vh;
    width: 100%;
    display: flex;
`

const StyledSignUpFormContainerForAnimation = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 480px;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 540px) {
        width: 100%;
        height: 100vh;
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        width: 480px;
    }
`

const StyledSignUpForm = styled.form`
    background-color: var(--form-bg-color);
    padding: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    gap: 1.5rem;
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

    h3 {
        text-align: center;
        font-size: 2.4rem;
        font-weight: bolder;
    }

    .email-container, .password-container, .username-container {
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

    .existing-acc {
        color: var(--form-link-color);
        text-decoration: none;
        font-size: 1.4rem;
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .date-of-birth-container {
        display: flex;
        gap: 1rem;
       .menu {
        input {
            background-color: var(--date-background-color);
            border: none;
            padding: 1rem;
            border: 1px solid var(--date-border-color);
            border-radius: 4px;
            outline: none;
            color: white;
            width: 100%;
            font-size: 1.6rem;
            :hover {
                border-color: var(--date-border-hover-color); 
            }
        }
       }
    }

    @media only screen and (max-width: 540px) {
        /* display: none; */
        width: 100%;
        height: 100%;
        justify-content: flex-start;
    }
`

export default SignUp