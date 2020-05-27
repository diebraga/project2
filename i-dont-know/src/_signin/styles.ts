import styled from 'styled-components';
import { shade } from 'polished';

import loginBackground from '../_assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 580px;

  form {
    margin: 80px, 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  button {
  }

  a {
    color: #fff;
    transition: color 0.2s;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  > a {
    color: #ff9000;
    transition: color 0.2s;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackground}) no-repeat center;
  background-size: 150%;
`;
