import styled from 'styled-components';
import fandom_img from "../../assets/fandom_landing.svg";



const FandomSection = () => {
    return (
        <StyledInviteOnlySection>
            <div className="fandom-img">
                <img src={fandom_img} alt="fandom-img" />
            </div>
            <div className="fandom-desc">
                <h3>From few to a fandom</h3>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </StyledInviteOnlySection>
    )
}

const StyledInviteOnlySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12rem;
    gap: 2rem;
    .fandom-img {
        flex-basis: 60%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .fandom-desc {
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
    @media only screen and (max-width: 540px) {
        padding: 4rem 2rem;
        flex-direction: column;
        .fandom-desc {
            h3 {
                font-size: 2rem;
            }
            p{
                margin-top: 3rem;
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        }
    }

    @media only screen and (min-width: 541px) and (max-width:1114px){
        padding: 7rem 3rem;
        .fandom-desc {
            flex-basis: 60%;
            h3 {
                font-size: 5rem;
            }
            p{
                margin-top: 3rem;
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        }
    }
`

export default FandomSection