import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  const [scrollProgresses, setScrollProgresses ] = useState({'introScroll': '0', 'skillsScroll': '0', 'portfolioScroll': '0', 'contactScroll': '0'});
  const [introScroll, setIntroScroll ] = useState(0)
  const [skillsScroll, setSkillsScroll ] = useState(0)
  const [portfolioScroll, setPortfolioScroll ] = useState(0)
  const [contactScroll, setContactScroll ] = useState(0)

  useEffect(() => {
    setScrollProgresses(prev => ({
      ...prev,
      'introScroll' : introScroll,
      'skillsScroll' : skillsScroll,
      'portfolioScroll' : portfolioScroll,
      'contactScroll' : contactScroll}))
  }, [introScroll, skillsScroll, portfolioScroll, contactScroll])

  console.log('width: ' ,window.visualViewport.scale)

  return (
    <div className="App">
      <Navbar scrollProgresses={scrollProgresses} />
      <Intro setScrollYProgress={setIntroScroll}/>
      <Skills setScrollYProgress={setSkillsScroll}/>
      <Portfolio setScrollYProgress={setPortfolioScroll} />
      <Contact setScrollYProgress={setContactScroll} />
      <Footer />
    </div>
  );
}

export default App;
