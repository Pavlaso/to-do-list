import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import {App} from './components/App';
import { Provider } from 'react-redux'
import { createReduxStore } from './redux/store';

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={createReduxStore()}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

