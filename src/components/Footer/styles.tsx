import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';
import bg from './img/footer-bg.jpg';

export const Wrapper = styled("div")`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  position: relative;
  color: white;
  left:0;
  right: 0;
  bottom: 0;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled("h2")`
  display: flex;
  justify-content: center;
  font-size: 28px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 16px 24px;
  font-weight: bold;

  ${minMediaQuery('sm')} {
    font-size: 40px;
  }

  span {
    font-weight: 300;
  }
`;

export const IconsWrapper = styled("div")`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyrights = styled("div")`
  text-align: center;
  font-size: 14px;
  padding: 8px;
  background-color: rgba(0,0,0, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const SvgIcon = styled("img")`
  width: 35px;
  height: 35px;
  margin: 16px;

  ${minMediaQuery('sm')} {
    width: 50px;
    height: 50px;
  }
`;
