import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  padding: 18rem 0;

  text-align: center;
  position: relative;

  .card-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    color: black;
  }

  .card {
    width: 280px;
    height: 400px;
    display: flex;
    background-color: #ebeef8;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;
  }

  .card .card-img {
    width: 90%;
    height: 180px;
    object-fit: cover;
  }

  .profile-img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
  }

  .card h1 {
    color: #5d6464;
    font-size: 25px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .city {
    color: #5d6464;
    font-size: 15px;
    font-weight: 380;
    margin-bottom: 13px;
  }

  .price {
    color: #777;
    font-size: 18px;
    font-weight: 400;
  }

  button {
    background: #eb3f3b;
    color: #fff;
    font-size: 18px;
    margin-bottom: 5%;
    width: 250px;
    border-radius: 5px;

    &:hover {
      background: ${shade(0.2, '#eb3f3b')};
    }
  }

  @media screen and (min-width: 700px) {
    .card-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .card {
      margin: 20px;
    }
  }
`;
