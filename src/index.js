import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './Reducers';
import reduxThunk from 'redux-thunk';
import DevTools from './devTools';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

let enhancer = compose(
  applyMiddleware(reduxThunk),
  DevTools.instrument()
);

const store = createStore(reducers,{},enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
