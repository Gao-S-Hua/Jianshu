import React from 'react';
import {GlobalStyle} from './style';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details/loadable';

const App: React.FC = () => {
  return (
      <Provider store = {store}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Route path = '/' exact component = {Home} />
        <Route path = '/details' exact component = {Details} />
      </BrowserRouter>
      </Provider>
  );
}

export default App;
