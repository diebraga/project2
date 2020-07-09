import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: transparent;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    color: #ff9000;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      color: #fff;
      transition: color 0.2s;
      display: block;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;

export const LoginSide = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #fff;

  a {
    color: #fff;
    transition: color 0.2s;
    display: block;
    text-decoration: none;

    strong {
      display: block;
      color: #fff;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
    a {
      display: block;
      margin-top: 2px;
      color: #fff;
    }
  }
`;
