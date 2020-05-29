import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Banner, Content, GetStarted } from './styles';

import NavBar from '../_components/navbar';
import Button from '../_components/button';
import Footer from '../_components/footer';

const ForUsers: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Banner>
          <h1>
            "Are you a skilled IT professional looking for a good place to
            work?"
            <br />
            <br />
          </h1>
        </Banner>
        <Content>
          <section>
            <h2>Work environment</h2>
            <p>
              Can you imagine you work in a professional environment, where you
              can learn from other developers and potentially be hired
              <br />
              <br />
              Search the best companies for you based on your skills set on our
              <br />
              <Link to="/discovery">Discovery</Link>
              &nbsp; section now.
            </p>
          </section>

          <aside />

          <section>
            <h2>Progress and friendship</h2>
            <p>
              Boost your skills, make new friends and discovery a whole new
              world of opportunities with iTenterprises.
              <br />
              <br />
              We believe that friendship and networking is very important for
              your carrier, that’s why our platform is made for.
              <br />
              <Link to="/register">Get Started</Link>
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

export default ForUsers;
