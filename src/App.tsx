import { useState } from "react"
import styled from "styled-components"
import FandomSection from "./Components/Landing Page Sections/FandomSection"
import Footer from "./Components/Landing Page Sections/Footer"
import HangingOutSection from "./Components/Landing Page Sections/HangingOutSection"
import Home from "./Components/Landing Page Sections/Home"
import InviteOnlySection from "./Components/Landing Page Sections/InviteOnlySection"
import JustChillinSection from "./Components/Landing Page Sections/JustChillinSection"
import MobileMenu from "./Components/Landing Page Sections/MobileMenu/MobileMenu"
const App = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const navPropsObject = {
    mobileMenuHandler: mobileMenuHandler
  }

  const homePropsObject = {
    navPropsObject: navPropsObject
  }

  const mobileMenuPropsObject = {
    mobileMenuHandler: mobileMenuHandler
  }

  return (
    <StyledApp className={`${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <Home {...homePropsObject} />
      <InviteOnlySection />
      <HangingOutSection />
      <FandomSection />
      <JustChillinSection />
      <Footer />
      {isMobileMenuOpen ? <MobileMenu {...mobileMenuPropsObject} /> : null}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  &.mobile-menu-open {
    position: fixed;
  }
`

export default App
