import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';
import bg from './hero-bg.jpg';

export const Wrapper = styled("div")`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled("h3")`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 32px;
  padding: 8px 24px;
  margin: 8px auto;

  span {
    font-weight: 300;
  }

  ${minMediaQuery('md')} {
    font-size: 42px;
  }

  ${minMediaQuery('xl')} {
    font-size: 60px;
  }
`;

export const SubTitle = styled("h4")`
  font-size: 16px;
  padding: 8px 24px;
  font-weight: 300;
  margin: 0;
  letter-spacing: 2px;

  ${minMediaQuery('md')} {
    font-size: 18px;
  }

  ${minMediaQuery('xl')} {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

export const FullName = styled("h1")`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 20px 0 5px 0;

  ${minMediaQuery('md')} {
    font-size: 20px;
    margin: 40px 0 10px 0;
  }

  ${minMediaQuery('xl')} {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

export const Role = styled("h2")`
  font-size: 16px;
  padding: 8px 24px;
  margin: 0 auto;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
  margin: 0;

  ${minMediaQuery('md')} {
    font-size: 18px;
  }

  ${minMediaQuery('xl')} {
    font-size: 20px;
  }
`;