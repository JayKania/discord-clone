import styled from 'styled-components'
import Navbar from './Navbar'
import background_img from "../../assets/center_bg_landing_header.svg"
import left_img from "../../assets/left_bg_landing_header.svg"
import right_img from "../../assets/right_bg_landing_header.svg"

interface homeProps {
    navPropsObject: {
        mobileMenuHandler: any,
    };
}

const Home = ({ navPropsObject }: homeProps) => {
    return (
        <StyledHome>
            <Navbar {...navPropsObject} />
            <StyledTitle>
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community.
                    Where just you and a handful of friends can spend time together.
                    A place that makes it easy to talk every day and hang out more often.
                </p>
                <div className="button-container">
                    <button className="download">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt">
                            <g fill="currentColor">
                                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                            </g>
                        </svg>
                        <span>Download for Mac</span>
                    </button>
                    <button className="browser">Open Discord in your browser</button>
                </div>
            </StyledTitle>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    background-color:  var(--primary-background-color);
    height: 80vh;
    background-image:url(${left_img}),url(${right_img}), url(${background_img});
    background-position: left -27rem bottom, right -25rem bottom, bottom;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 45%, 40%, cover;

    @media only screen and (max-width: 540px) {
        background-image: url(${left_img});
        background-position: left -80px bottom;
        height: fit-content;
        padding-bottom: 18rem;
        background-size: 100%;
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        background-image: url(${right_img}), url(${background_img});
        background-position: right -150px bottom, bottom;
        height: fit-content;
        padding-bottom: 18rem;
        background-size: 80%, cover;
    }
`

const StyledTitle = styled.div`
    width: 60%;
    margin: 7em auto;
    text-align: center;
    color: white;
    h1 {
        font-family: uni-sans;
        font-size: 8rem;
    }

    p {
        margin-top: 2rem;
        font-size: 1.8rem;
        line-height: 3rem;
        font-weight: 300;
        width: 85%;
        margin: 0 auto;
    }

    .button-container {
        margin-top: 4rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
        button {
            padding: 1.5rem 2.5rem;
            border-radius: 50px;
            border: none;
            font-size: 1.8rem;
            transition: box-shadow 250ms ease, color 250ms ease, background-color 250ms ease;
            :hover {
                cursor: pointer;
                box-shadow: 0px 5px 10px 5px rgb(53, 53, 53, 0.2);
            }
        }
        .download {
            display: flex;
            align-items: center;
            gap: 5px;
            :hover {
                color: var(--primary-font-color);
            }
        }
        .browser {
            background-color: rgb(35, 39, 42);
            color: white;
            :hover {
                background-color: rgb(54, 57, 62);
            }
        }
    }

    @media only screen and (max-width: 540px) {
        width: 100%;
        padding: 0 2rem;
        margin: 3em 0;
        h1 {
            font-size: 2.4rem;
            text-align: left;
        }
        p {
            text-align: left;
            width: 100%;
            margin-top: 3rem;
            font-size: 1.5rem;
        }
        .button-container {
            .download {
                flex-basis: 100%;
                justify-content: center;
                img {
                    width: 2.5rem;
                }
            }
            .browser {
                display: none;
            }
        }
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        width: 100%;
        padding: 0 4rem;
        margin: 3em 0;
        h1 {
            font-size: 6rem;
            text-align: left;
            margin-top: 6rem;
        }
        p {
            text-align: left;
            width: 60%;
            margin: 2rem 0;
            font-size: 1.5rem;
        }
        .button-container {
            justify-content: flex-start;
            .download {
                width: fit-content;
                justify-content: center;
            }
            .browser {
                display: none;
            }
        }
    }
`

export default Home