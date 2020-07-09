import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './_styles_css/global/globals';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
