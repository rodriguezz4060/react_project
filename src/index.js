import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/store";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         dispatch={store.dispatch.bind(store)}
    />, document.getElementById('root'));
}

serviceWorker.unregister();
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);