import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import styled from "styled-components"
import LandingPage from "./Components/Landing Page Sections/LandingPage"
import Login from "./Components/Login/Login";
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

  const landingPagePropsObject = {
    homePropsObject: homePropsObject,
    isMobileMenuOpen: isMobileMenuOpen,
    mobileMenuPropsObject: mobileMenuPropsObject
  }

  return (
    <StyledApp className={`${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <Routes>
        <Route path="/" element={<LandingPage {...landingPagePropsObject} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  &.mobile-menu-open {
    position: fixed;
  }
`

export default App
