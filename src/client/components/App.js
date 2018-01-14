import React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import Menu from './Menu';
import ErrorTile from './Error';
import Footer from './Footer';

const App = ({ route }) => {
  return (
    <div>
      <Helmet>
        <title>TopNews</title>
      </Helmet>
      <Menu />
      {renderRoutes(route.routes)}
      <ErrorTile />
      <Footer />
    </div>
  );
};

export default {
  component: App
};