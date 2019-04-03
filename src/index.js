import React from 'react';
import ReactDOM, {render}from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import store from './store/store.js';
import FileView from './FileView.js';


// ReactDOM.render(<App />, document.getElementById('root'));
const rootDiv = document.getElementById('root');

const comp =
  <div>
    <div className={'btn-padding'}>
    <button onClick={reloadComponent}>Reload Component</button>
    </div>
    <Provider store={store}>
      <FileView/>
    </Provider>
  </div>;

render(comp, rootDiv);

function reloadComponent() {
  ReactDOM.unmountComponentAtNode(rootDiv);
  // adding a slight delay so that reloading is noticeable!
  setTimeout(() => render(comp, rootDiv), 50);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
