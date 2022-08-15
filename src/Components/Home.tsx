import styled from 'styled-components'
import Navbar from './Navbar'
import background_img from "../assets/center_bg_landing_header.svg"
interface homeProps {

}

const Home = (props: homeProps) => {
    return (
        <StyledHome><Navbar /></StyledHome>
    )
}

const StyledHome = styled.div`
    background-color:  var(--primary-color);
    height: 80vh;
    background-image: url(${background_img});
    background-position: bottom;
    background-repeat: no-repeat;
`

export default Home