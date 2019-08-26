import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//good for development, keeps the page from refreshing which means that the state wont reset during file changes.



if (module.hot) {
  module.hot.accept();
}
