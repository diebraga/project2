import React from 'react';
import { Link } from 'react-router-dom';

import { Div, ContentBox } from './styles';

import NavBar from '../_components/navbar';
import Footer from '../_components/footer';
import Cards from '../_components/card';

const Explore: React.FC = () => {
  return (
    <>
      <NavBar />
      <Cards />

      <Footer />
    </>
  );
};

export default Explore;
