import styled from 'styled-components';

import bannerBackground5 from '../../_assets/banner3.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: black;
`;

export const Div = styled.div`
    display: grid;
    grid-template-columns: 280px;
    grid-template-rows: 140px 160px 60px;
    grid-template-areas: 'image' 'text' 'stats';

    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    font-family: sans-serif;
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    margin: 30px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }


  .card-image {
    grid-area: image;
    background: url(${bannerBackground5}) no-repeat center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
  }

  .card-text p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
  }
  .card-text h2 {
    margin-top: 0px;
    font-size: 28px;
  }

  .card-text {
    grid-area: text;
    margin: 25px;
  }

  .card-text p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
  }
  .card-text h2 {
    margin-top: 0px;
    font-size: 28px;
  }

  .card-stats {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #fff;
  }

  .card-stats .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: white;
    padding: 10px;


`;
