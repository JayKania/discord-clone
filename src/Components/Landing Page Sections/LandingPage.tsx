import FandomSection from "./FandomSection"
import Footer from "./Footer"
import HangingOutSection from "./HangingOutSection"
import Home from "./Home"
import InviteOnlySection from "./InviteOnlySection"
import JustChillinSection from "./JustChillinSection"
import MobileMenu from "../MobileMenu/MobileMenu"

interface landingPageProps {
    homePropsObject: any,
    isMobileMenuOpen: boolean,
    mobileMenuPropsObject: any
}

const LandingPage = ({ homePropsObject, isMobileMenuOpen, mobileMenuPropsObject }: landingPageProps) => {
    return (
        <>
            <Home {...homePropsObject} />
            <InviteOnlySection />
            <HangingOutSection />
            <FandomSection />
            <JustChillinSection />
            <Footer />
            {isMobileMenuOpen ? <MobileMenu {...mobileMenuPropsObject} /> : null}
        </>
    )
}

export default LandingPage