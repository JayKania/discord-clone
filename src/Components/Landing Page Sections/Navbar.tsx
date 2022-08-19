import styled from 'styled-components'
import discord_logo from "../../assets/discord_logo_1.svg"
interface navProps {
    mobileMenuHandler: any
}

const Navbar = ({ mobileMenuHandler }: navProps) => {
    return (
        <StyledNavbar>
            <div className="logo-container">
                <img src={discord_logo} alt="discord_logo" />
                <span>Discord</span>
            </div>
            <div className="links-container">
                <a href="#download">Download</a>
                <a href="#nitro">Nitro</a>
                <a href="#discover">Discover</a>
                <a href="#safety">Safety</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#careers">Carrers</a>
            </div>
            <div className="login-container">
                <button>Login</button>
            </div>
            {window.innerWidth <= 1114 ? <div className='burger-menu' onClick={mobileMenuHandler} >
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path>
                </svg>
            </div> : null}
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    /* background-color: ; */
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1.6rem;
    .logo-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            font-weight: 700;
            font-family: uni-sans;
            letter-spacing: 2px;
        }
        :hover {
            cursor: pointer;
        }
    }

    .links-container {
        display: flex;
        gap: 4rem;
        a {
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-size: 0.9em;
            :hover {
                text-decoration: underline;
            }
        }
    }

    .login-container {
        button {
            border: none;
            padding: 1rem 2rem;
            border-radius: 20px;
            outline: none;
            transition: box-shadow 200ms ease, color 200ms ease;
            :hover {
                cursor: pointer;
                color: var(--primary-font-color);
                box-shadow: 0px 5px 5px 5px rgb(48, 48, 48, 0.1);
            }
        }
    }

    .burger-menu {
        :hover {
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 540px) {
        padding: 2.5rem 1.8rem;
        justify-content: space-between;
        .links-container {
            display: none;
        }
        .login-container {
            display: none;
        }
    }

    @media only screen and (min-width: 541px) and (max-width: 1114px) {
        padding: 2.5rem 4rem;
        justify-content: space-between;
        .links-container {
            display: none;
        }
        .login-container {
            display: none;
        }
    }
`

export default Navbar