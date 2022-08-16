import styled from 'styled-components'
import just_chillin_img from "../../assets/just_chiling_landing.svg"
import tiny_stars_img from "../../assets/tiny_stars_landing.svg"

const JustChillinSection = () => {
    return (
        <StyledJustChillinSection>
            <h3>RELIABLE TECH FOR STAYING CLOSE</h3>
            <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            <div className="just-chillin-img">
                <img src={just_chillin_img} alt="just_chillin_img" />
            </div>
            <h4>Ready to start your journey?</h4>
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
            </div>
        </StyledJustChillinSection>
    )
}

const StyledJustChillinSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-background-color);
    padding: 13rem;
    align-items: center;
    h3 {
        font-size: 5rem;
        font-family: uni-sans;
        text-align: center;
        width: 70%;
        margin:0 auto;
    }
    p{
        font-size: 2rem;
        font-weight: 300;
        line-height: 3.5rem;
        width: 70%;
        margin: 2rem auto;
        text-align: center;
    }
    .just-chillin-img {
        height: 100%;
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    h4 {
        padding: 2rem;
        font-size: 3rem;
        text-align: center;
        width: 40%;
        margin: 5rem auto;
        background-image: url(${tiny_stars_img});
        background-position: top;
        background-repeat: no-repeat;
    }
    .button-container {
        .download {
            color: white;
            background-color: var(--primary-font-color);
            border: none;
            padding: 1.7rem 2.5rem;
            border-radius: 50px;
            display: flex;
            align-items: center;
            font-size: 2rem;
            gap: 1rem;
            transition: box-shadow 250ms ease, background-color 250ms ease;
            :hover {
                cursor: pointer;
                background-color: rgb(121, 131, 245);
                box-shadow: 0px 5px 10px 5px rgb(53, 53, 53, 0.2);
            }
        }
    }
`

export default JustChillinSection