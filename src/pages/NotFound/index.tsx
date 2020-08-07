import React from 'react';
import Footer from '../../components/Footer';
import { Wrapper, BackHome } from './styles';

const NotFound: React.FC = () => (
  <>
    <Wrapper className="main">
      <h1>404</h1>
      <h2>Oops, page not found!</h2>
      <p><BackHome to="/">Go back to home page</BackHome></p>
    </Wrapper>
    <Footer />
  </>
);

export default NotFound;
