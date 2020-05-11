import styled from 'styled-components';

export const Wrapper = styled('div')`
  background: #fff;
  border-radius: 2px;
  margin: 32px 40px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    /* border-bottom: 1px solid #1868c9; */
  }
`;

export const ImageWrapper = styled('div')`
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
  padding: 8px;
  background-color: #1868c9;
  color: white;
`;

export const DescriptionItem = styled('div')``;
