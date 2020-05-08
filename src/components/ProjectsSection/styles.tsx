import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';

export const Wrapper = styled("div")`
  margin: 24px 0 40px;
`;

export const Heading = styled("h2")`
  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(to right, #ffffff, #27ccf8, #1868c9);
  padding: 16px;
  margin: 8px 0;
  width: 100%;
  text-align: center;

  ${minMediaQuery('lg')} {
    font-size: 28px;
    margin: 40px 0;
    width: calc(50% - 24px);
    text-align: right;
  }
`;

export const Grid = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${minMediaQuery('sm')} {
    flex-wrap: wrap;
`;

export const Item = styled("div")``;

export const TextBlock = styled("div")``;