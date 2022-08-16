import styled from "styled-components"
import discord_logo from "../../assets/discord_logo_1.svg"

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContent>
                <div className="info-section">
                    <h4>Imagine A <br />Place</h4>
                    <p>English, USA</p>
                    <div className="social-media-links">
                        <div className="twitter">
                            <i className="fa fa-brands fa-2x fa-twitter"></i>
                        </div>
                        <div className="instagram">
                            <i className="fa fa-brands fa-2x fa-instagram"></i>
                        </div>
                        <div className="facebook">
                            <i className="fa fa-brands fa-2x fa-facebook"></i>
                        </div>
                        <div className="youtube">
                            <i className="fa fa-brands fa-2x fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div className="route-section">
                    <div>Product</div>
                    <a href="#">Download</a>
                    <a href="#">Nitro</a>
                    <a href="#">Status</a>
                </div>

                <div className="route-section">
                    <div>Company</div>
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">Branding</a>
                    <a href="#">Newsroom</a>
                </div>

                <div className="route-section">
                    <div>Resources</div>
                    <a href="#">College</a>
                    <a href="#">Support</a>
                    <a href="#">Safety</a>
                    <a href="#">Blog</a>
                    <a href="#">Feedback</a>
                    <a href="#">Developers</a>
                    <a href="#">Streamkit</a>
                </div>

                <div className="route-section">
                    <div>Policies</div>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Settings</a>
                    <a href="#">Guidelines</a>
                    <a href="#">Acknowledgements</a>
                    <a href="#">Licenses</a>
                    <a href="#">Moderation</a>
                </div>
            </StyledFooterContent>
            <div className="seperator"></div>
            <div className="logo-signup-container">
                <div className="logo-container">
                    <img src={discord_logo} alt="discord_logo" />
                    <span>Discord</span>
                </div>
                <div className="signup-container">
                    <button>Sign up</button>
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: var(--footer-background-color);
    color: white;
    padding: 8rem 12rem;

    .seperator {
        margin-top: 5rem;
        background-color: var(--primary-font-color);
        width: 100%;
        height: 1px;
    }
    
    .logo-signup-container {
        display: flex;
        justify-content: space-between;
        padding-top: 2rem;
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-family: uni-sans;
            font-size: 2rem;
        }

        .signup-container {
            button {
                border: none;
                padding: 1rem 2rem;
                border-radius: 20px;
                outline: none;
                transition: background-color 200ms ease;
                color: white;
                background-color: var(--primary-font-color);
                :hover {
                    cursor: pointer;
                    background-color: rgb(121, 131, 245);
                }
            }
        }
    }
`

const StyledFooterContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .info-section {
        h4 {
            color: var(--primary-font-color);
            font-size: 4rem;
            font-family: uni-sans;
        }
        p {
            margin-top: 1rem;
            font-weight: 300;
            font-size: 1.3rem;
        }
        .social-media-links {
            display: flex;
            align-items: center;
            font-size: 1rem;
            gap: 3rem;
            margin-top: 2rem;
            i {
                :hover {
                    cursor: pointer;
                }
            }
        }
    }

    .route-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-weight: 300;
        div:first-of-type{
            color: var(--primary-font-color);
        }
        a {
            text-decoration: none;
            color: white;
            :hover {
                text-decoration: underline;
            }
        }
    }
`

export default Footer