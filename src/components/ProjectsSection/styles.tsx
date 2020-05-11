import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';

export const Wrapper = styled('div')`
  margin: 24px 0 40px;
`;

export const HeadingWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const Heading = styled('h2')`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(to left, #ffffff, #27ccf8, #1868c9);
  padding: 16px;
  margin: 8px 0;
  width: 100%;
  text-align: center;

  span {
    font-weight: 300;
  }

  ${minMediaQuery('lg')} {
    font-size: 28px;
    margin: 40px 0;
    width: calc(50% - 24px);
    text-align: left;
  }
`;

export const Grid = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${minMediaQuery('sm')} {
    flex-wrap: wrap;
  }
`;

export const Item = styled('div')`
  width: 100%;
  display: flex;

  ${minMediaQuery('sm')} {
    width: 50%;
  }

  ${minMediaQuery('lg')} {
    width: 25%;
  }
`;

export const TextBlock = styled('div')``;
