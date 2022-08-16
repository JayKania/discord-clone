import styled from 'styled-components'
import discord_logo from "../assets/discord_logo_1.svg"
interface navProps {

}

const Navbar = (props: navProps) => {
    return (
        <StyledNavbar>
            <div className="logo-container">
                <img src={discord_logo} alt="discord_logo" />
                <span>Discord</span>
            </div>
            <div className="links-container">
                <a href="#">Download</a>
                <a href="#">Nitro</a>
                <a href="#">Discover</a>
                <a href="#">Safety</a>
                <a href="#">Support</a>
                <a href="#">Blog</a>
                <a href="#">Carrers</a>
            </div>
            <div className="login-container">
                <button>Login</button>
            </div>
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
                color: var(--primary-color);
                box-shadow: 0px 5px 5px 5px rgb(48, 48, 48, 0.1);
            }
        }
    }
`

export default Navbar