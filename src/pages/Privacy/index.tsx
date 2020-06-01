import React from 'react';
import 'styled-components/macro';
import Footer from '../../components/Footer';
import { Wrapper, Message, BackHome } from './styles';

const Privacy: React.FC = () => (
  <>
    <Wrapper>
      <Message>The site doesn&apos;t collect any personal or sensitive data! You are safe!</Message>
      <BackHome to="/">back to home page</BackHome>
    </Wrapper>
    <Footer />
  </>
);

export default Privacy;
