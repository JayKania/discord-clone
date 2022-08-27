import { useState } from "react";
import styled from "styled-components"
import signup_bg from "../../assets/login_bg.svg";
import Days from "./Days";
import Months from "./Months";
import Years from "./Years";

const SignUp = () => {

    const [monthsModal, setMonthsModal] = useState(false);
    const [daysModal, setDaysModal] = useState(false);
    const [yearsModal, setYearsModal] = useState(false);

    const [monthValue, setMonthValue] = useState("");
    const [dayValue, setDayValue] = useState("");
    const [yearValue, setYearValue] = useState("");

    const closeAllModals = () => {
        if (monthsModal) {
            setMonthsModal(false);
        } else if (daysModal) {
            setDaysModal(false);
        } else if (yearsModal) {
            setYearsModal(false);
        }
    }

    const monthsModalHanlder = () => {
        setMonthsModal(!monthsModal);
        setDaysModal(false);
        setYearsModal(false);
    }
    const daysModalHanlder = () => {
        setMonthsModal(false);
        setDaysModal(!daysModal);
        setYearsModal(false);
    }
    const yearsModalHanlder = () => {
        setMonthsModal(false);
        setDaysModal(false);
        setYearsModal(!yearsModal);
    }

    const monthValueHandler = (month: string) => {
        setMonthValue(month);
    }

    const dayValueHandler = (day: string) => {
        setDayValue(day);
    }

    const yearValueHandler = (year: string) => {
        setYearValue(year)
    }

    return (
        <StyledSignUpContainer onClick={closeAllModals}>
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
                            {
                                monthsModal ?
                                    <div className="option-menu">
                                        <Months monthValueHandler={monthValueHandler} />
                                    </div>
                                    : null
                            }
                            <input type="text" name="month" id="month" className="month-input" placeholder="Month" value={monthValue} onClick={monthsModalHanlder} />
                        </div>
                        <div className="day-menu menu">
                            {
                                daysModal ?
                                    <div className="option-menu">
                                        <Days dayValueHandler={dayValueHandler} />
                                    </div>
                                    : null
                            }
                            <input type="text" name="day" id="day" className="day-input" placeholder="Day" value={dayValue} onClick={daysModalHanlder} />
                        </div>
                        <div className="year-menu menu">
                            {
                                yearsModal ?
                                    <div className="option-menu">
                                        <Years yearValueHandler={yearValueHandler} />
                                    </div>
                                    : null
                            }
                            <input type="text" name="year" id="year" className="year-input" placeholder="Year" value={yearValue} onClick={yearsModalHanlder} />
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
        position: relative;
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
        .option-menu {
            position: absolute;
            bottom: 100%;
            width: 100%;
            border: 1px solid var(--date-border-color);
            border-radius: 4px;
            background-color: var(--date-background-color);
            display: flex;
            flex-direction: column;
            height: 205px;
            overflow: scroll;
            .option {
                padding: 0.97rem 1rem;
                :hover {
                    background-color: var(--date-hover-color);
                    cursor: pointer;
                }
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