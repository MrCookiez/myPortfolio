import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContentBlock from './components/ContentBlock';
import TechLogoElement from './components/TechLogoElement';
import ProjetsSection from './components/ProjectsSection';

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('UA-87266490-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Hero />
      <ContentBlock />
      <TechLogoElement />
      <ProjetsSection />
      <Footer />
    </div>
  );
};

export default App;
