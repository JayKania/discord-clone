import FandomSection from "./Components/Landing Page Sections/FandomSection"
import Footer from "./Components/Landing Page Sections/Footer"
import HangingOutSection from "./Components/Landing Page Sections/HangingOutSection"
import Home from "./Components/Landing Page Sections/Home"
import InviteOnlySection from "./Components/Landing Page Sections/InviteOnlySection"
import JustChillinSection from "./Components/Landing Page Sections/JustChillinSection"
const App = () => {
  return (
    <>
      <Home />
      <InviteOnlySection />
      <HangingOutSection />
      <FandomSection />
      <JustChillinSection />
      <Footer />
    </>
  )
}

export default App
