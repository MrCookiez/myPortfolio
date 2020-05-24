import React from 'react';
import 'styled-components/macro';
import Footer from '../../components/Footer';
import { Wrapper } from './styles';

const Privacy: React.FC = () => (
  <>
    <Wrapper>
      The site doesn&apos;t collect any personal or sensitive data! You are safe!
    </Wrapper>
    <Footer />
  </>
);

export default Privacy;
