import Navbar from "/src/components/Navbar.jsx"
import Hero from "/src/components/Hero.jsx"
import HighLights from "/src/components/HightLights.jsx"
import Model from "/src/components/Model.jsx"
import * as Sentry from "@sentry/react"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
const App=()=> {
  
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <HighLights />
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
    </>
  )
}

export default Sentry.withProfiler(App)
