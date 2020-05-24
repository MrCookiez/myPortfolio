import styled from 'styled-components';
import { minMediaQuery } from '../../components/config/grid';


export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  height: 70vh;

  ${minMediaQuery('sm')} {
    font-size: 32px;
  }
`;

export const Container = styled('div')``;
