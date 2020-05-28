import React from 'react';

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
            "We connect bussiness and IT professionals, in a simple and
            innovative way."
          </h1>
        </Banner>
        <Content>
          <section>
            Whenever you want rent free spaces in you company iTenterprises is
            the best solution.
          </section>

          <aside>aaa</aside>

          <section>
            <h1>How it works</h1>
            <p>
              Companies and IT business can rent empity spaces in their offices,
              greate opportunity for professionals develop their skills and
              companies discovery new talents.
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
