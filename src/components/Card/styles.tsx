import styled from 'styled-components';
import { minMediaQuery } from '../config/grid';

export const Wrapper = styled('div')`
  background-color: #1868c9;
  border-radius: 2px;
  margin: 32px 40px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  flex-direction: column;

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
  }

  .item__type {
    display: flex;
  }
`;

export const ImageWrapper = styled('div')`
  background: #fff;

  .image {
    width: 100%;
  }
`;

export const Heading = styled('h2')`
  background: linear-gradient(to left, #ffffff, #27ccf8, #1868c9);
  color: white;
  padding: 8px;
  text-align: center;
  margin: 0;
`;

export const DescriptionWrapper = styled('div')`
  padding: 16px;
  color: white;

  ${minMediaQuery('md')} {
    padding: 24px;
  }
`;

export const DescriptionItem = styled('div')`
  line-height: 1.5;
  margin-bottom: 10px;
  position: relative;

  span {
    font-size: 1rem;
    margin: 4px 0;
    padding-right: 8px;
    font-weight: bold;
  }
`;
