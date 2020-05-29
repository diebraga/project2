import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Banner, Content, GetStarted } from './styles';

import NavBar from '../_components/navbar';
import Button from '../_components/button';
import Footer from '../_components/footer';

const ForBusiness: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Banner>
          <h1>
            "Boost your business find new talents offering extra spaces in your
            offices"
            <br />
            <br />
          </h1>
        </Banner>
        <Content>
          <section>
            <h2>Space and work</h2>
            <p>
              Maximize your work space usage offering them to IT professionals,
              you choose who, you set the price.
              <br />
              <br />
              Choose the best IT professionals requests for your company based
              on their skills set. &nbsp;
              <Link to="/register">Get started</Link>
              &nbsp; now.
            </p>
          </section>

          <aside />

          <section>
            <h2>Team Growth</h2>
            <p>
              Other than economic profits, the knowledge exchange between the
              platform users and your team will improve productivity for both
              sides.
              <br />
              <br />
              Discovery new talents in a fast and innovative way with
              iTenterpises.
              <br />
              <Link to="/register">Get Started</Link>
              &nbsp; now.
            </p>
          </section>
        </Content>
        <GetStarted>
          <h1>Join Us</h1>
          <Button>Get started</Button>
        </GetStarted>
        <Footer />
      </Container>
    </>
  );
};

export default ForBusiness;
