import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './app';
import { AppContext, useDefaultAppContext } from './context'

const Application = () => <AppContext.Provider value={useDefaultAppContext()}>
  <App />
</AppContext.Provider>

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
