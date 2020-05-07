import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';

export const Wrapper = styled("div")`
  width: 100%;
  box-sizing: border-box;
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
  box-sizing: border-box;

  ${minMediaQuery('lg')} {
    font-size: 28px;
    margin: 40px 0;
    width: calc(50% - 24px);
    text-align: right;
  }

  span {
    font-weight: bold;
  }
`;

export const LogoWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 24px 40px;
`;

export const Logo = styled("div")`
  margin: 16px 8px;

  ${minMediaQuery('lg')} {
    width: 15%;
  }
`;

export const Img = styled("img")`
  width: 50px;

  ${minMediaQuery('sm')} {
    width: 100px;
    max-height: 100px;
  }

  ${minMediaQuery('lg')} {
    width: 150px;
    max-height: 150px;
  }
`;
