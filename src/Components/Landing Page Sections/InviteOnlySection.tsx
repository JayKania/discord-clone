import styled from "styled-components"
import invite_only_img from "../../assets/invite_only_landing.svg";

const InviteOnlySection = () => {
    return (
        <StyledInviteOnlySection>
            <div className="invite-only-img">
                <img src={invite_only_img} alt="invite-only-img" />
            </div>
            <div className="invite-only-desc">
                <h3>Create an invite-only place where you belong</h3>
                <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
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
    .invite-only-img {
        flex-basis: 60%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .invite-only-desc {
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
        .invite-only-desc {
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
        .invite-only-desc {
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

export default InviteOnlySection