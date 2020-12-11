import React from 'react';

import Routes from './router/routes';

import Header from './components/Header';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
