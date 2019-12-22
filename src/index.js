import React from 'react';
import ReactDOM from 'react-dom';

/** App */
import App from './App/App';

/** Service worker */
import * as serviceWorker from './serviceWorker';

/** Global styles */
import "../src/assets/css/index.css";

/** Store */
import store from "./store"

/** Provider */
import { Provider } from 'react-redux'

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'));

serviceWorker.unregister();
