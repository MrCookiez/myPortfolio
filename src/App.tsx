import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContentBlock from './components/ContentBlock';
import TechLogoElement from './components/TechLogoElement';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <ContentBlock />
      <TechLogoElement />
      <Footer />
    </div>
  );
};

export default App;
