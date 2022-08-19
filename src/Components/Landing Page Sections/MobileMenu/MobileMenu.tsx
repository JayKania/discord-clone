import styled from 'styled-components';
import discord_logo from "../../../assets/discord_logo_black.svg";

interface mobileMenuProps {
    mobileMenuHandler: any
}

const MobileMenu = ({ mobileMenuHandler }: mobileMenuProps) => {
    return (
        <>
            <StyledOverlay onClick={mobileMenuHandler} />
            <StyledMobileMenu>

                <div className="mobile-nav">
                    <div className="header">
                        <img src={discord_logo} alt="discord_logo" className='discord_logo' />
                        <h3>Discord</h3>
                    </div>
                    <div className='close-button' onClick={mobileMenuHandler}>
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="seperator"></div>

                <StyledeMobileLinks className="mobile-links">
                    <a href="#home">Home</a>
                    <a href="#download">Download</a>
                    <a href="#nitro">Nitro</a>
                    <a href="#discovery">Discovery</a>
                    <a href="#safety">Safety</a>
                    <a href="#mod-academy">Mod Academy</a>
                    <a href="#support">Support</a>
                    <a href="#blog">Blog</a>
                    <a href="#careers">Careers</a>
                </StyledeMobileLinks>

                <StyledDownloadSection className="download-section">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt">
                            <g fill="currentColor">
                                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                            </g>
                        </svg>
                        <span>Download from Play Store</span>
                    </button>
                </StyledDownloadSection>

            </StyledMobileMenu>
        </>

    )
}

const StyledOverlay = styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color: rgb(0,0,0,0.5);
`

const StyledMobileMenu = styled.div`
    width: 325px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    height: 100vh;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 3rem;
    padding-right: calc(3rem + 20px);
    padding-left: 2rem;
    padding-bottom: 13rem;
    overflow: scroll;
    overflow-x: hidden;
    animation: open 250ms ease 1;
    .mobile-nav {
        .header {
            display: flex;
            gap: 1rem;
            align-items: center;
            h3 {
                font-family: uni-sans;
            }
        }

        svg {
            width: 20px;
            position: fixed;
            z-index: 1;
            right: 3rem;
            top: 3rem;
            :hover {
                cursor: pointer;
            }
        }
    }

    .seperator {
        width:100%;
        height: 1px;
        margin-top: 3rem;
        background-color: var(--off-white);
    }

    @keyframes open {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0);
        }
    }
`

const StyledeMobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    font-weight: 300;
    overflow: scroll;

    a {
        padding: 1rem 1.5rem;
        text-decoration: none;
        color:black;
        :first-child  {
            padding: 1rem 1.5rem;
            background-color: var(--off-white);
            border-radius: 5px;
            color: var(--text-link);
        }
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

const StyledDownloadSection = styled.div`
    position: fixed;
    bottom: 0;
    right:0;
    width: 325px;
    padding: 2.5rem;
    background-color: white;
    border-bottom-left-radius: 10px;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        background-color: var(--primary-font-color);
        color: white;
        border-radius: 20px;
        padding: 0.7rem 1rem;
        border: none;
        transition: box-shadow 200ms ease, background-color 250ms ease;

        :hover {
            cursor: pointer;
            background-color: rgb(121, 131, 245);
            box-shadow: 0px 5px 10px 5px rgb(53, 53, 53, 0.2);
        }
    }
`

export default MobileMenu