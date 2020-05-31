import React from 'react';
import { Button } from 'react-bootstrap';

import { Container, Div } from './styles';

const Cards: React.FC = () => {
  return (
    <>
      <Container>
        <Div>
          <div className="card-image" />
          <div className="card-text">
            <h2>Post One</h2>
            <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae</p>
          </div>
          <div className="card-stats">
            <Button>Request</Button>

            <div className="stat" />
          </div>
        </Div>
        <Div>
          <div className="card-image" />
          <div className="card-text">
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
          <div className="card-stats">
            <Button>Request</Button>

            <div className="stat" />
          </div>
        </Div>
        <Div>
          <div className="card-image" />
          <div className="card-text">
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
          <div className="card-stats">
            <Button>Request</Button>

            <div className="stat" />
          </div>
        </Div>
        <Div>
          <div className="card-image" />
          <div className="card-text">
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
          <div className="card-stats">
            <Button>Request</Button>

            <div className="stat" />
          </div>
        </Div>
      </Container>
    </>
  );
};

export default Cards;
