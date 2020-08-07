import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { minMediaQuery } from '../../components/config/grid';


export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  height: 70vh;

  ${minMediaQuery('sm')} {
    font-size: 32px;
  }
`;

export const Message = styled('div')`
  font-size: 24px;
  text-align: center;
`;

export const BackHome = styled(Link)`
  padding: 20px;
  font-size: 18px;
`;
