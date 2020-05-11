import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${minMediaQuery('sm')} {
    flex-direction: row;
    min-height: 450px;
  }
`;

export const ImageContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${minMediaQuery('xs')} {
    flex-direction: row;
    width: 50%;
  }
`;

export const Image = styled('img')`
  width: 100%;
  max-width: 400px;
`;

export const TextBlock = styled('div')`
  width: 100%;
  color: #006699;
  background-color: white;
  padding: 16px;
  margin-bottom: 24px;

  ${minMediaQuery('sm')} {
    width: 50%;
    padding: 24px;
  }
`;

export const Heading = styled('h2')`
  background-color: white;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 24px 0;
  letter-spacing: 2px;
  padding: 0 16px;
  text-align: center;

  ${minMediaQuery('md')} {
    font-size: 28px;
    padding: 0;
    text-align: left;
  }

  span {
    font-weight: 300;
  }
`;

export const Text = styled('p')`
  line-height: 1.5;
  letter-spacing: 1;
  font-size: 16px;
  margin: 0;
  padding: 0 16px;

  ${minMediaQuery('md')} {
    font-size: 18px;
    padding: 0 80px 0 0;
  }
`;
