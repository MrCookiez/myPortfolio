import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContentBlock from './components/ContentBlock';
import TechLogoElement from './components/TechLogoElement';
import ProjetsSection from './components/ProjectsSection';

const App: React.FC = () => {
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
