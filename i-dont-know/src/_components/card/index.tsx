import React from 'react';

import { Container } from './styles';
import Button from '../button';

const Cards: React.FC = () => {
  return (
    <>
      <Container>
        <br />
        <br />
        <br />
        <div className="card-wrapper">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/7065/space-desk-office-hero-7065.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Diego"
              className="card-img"
            />
            <h1>Gooogle</h1>
            <h2 className="city">Milan - Italy</h2>
            <h2 className="price">Price: 20$ /Day</h2>
            <Button>Request</Button>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Diego"
              className="card-img"
            />
            <h1>Airtnt</h1>
            <h2 className="city">San Paolo - Brazil</h2>
            <h2 className="price">Price: 0$ /Day</h2>
            <Button>Request</Button>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Diego"
              className="card-img"
            />
            <h1>uUber</h1>
            <h2 className="city">Dublin - Ireland</h2>
            <h2 className="price">Price: 30$ /Day</h2>
            <Button>Request</Button>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Diego"
              className="card-img"
            />
            <h1>iRevolut</h1>
            <h2 className="city">Toronto - Canada</h2>
            <h2 className="price">Price: 25$ /Day</h2>
            <Button>Request</Button>
          </div>
        </div>
        <br />
      </Container>
    </>
  );
};

export default Cards;
