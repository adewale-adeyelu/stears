import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Organisation  from "./components/Organisation";
import Empowerment from "./components/Empowerment";
import Investors from "./components/Investors";
import Industry from "./components/Industry";
import Data from "./components/Data";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#000000]">
      <Navbar />
      <Hero />
      <Services />
      <Organisation />
      <Empowerment />
      <Investors />
      <Industry />
      <Data />
      <Footer />
    </div>
  )
}

export default App;
