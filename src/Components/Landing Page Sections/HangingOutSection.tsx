import styled from 'styled-components';
import hanging_out_img from "../../assets/hanging_out_easy_landing.svg";

const HangingOutSection = () => {
    return (
        <StyledHangingOutSection>
            <div className="hanging-out-img">
                <img src={hanging_out_img} alt="hanging-out-img" />
            </div>
            <div className="hanging-out-desc">
                <h3>Where hanging out is easy</h3>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
        </StyledHangingOutSection>
    )
}

const StyledHangingOutSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 12rem;
    gap: 2rem;
    background-color: var(--secondary-background-color);
    .hanging-out-img {
        flex-basis: 60%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .hanging-out-desc {
        flex-basis: 40%;
        h3 {
            font-size: 5rem;
        }
        p {
            margin-top: 4rem;
            font-size: 2rem;
            font-weight: 300;
            line-height: 3.5rem;
        }
    }
`

export default HangingOutSection