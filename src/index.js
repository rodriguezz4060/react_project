import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/State";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}
                         addMessage={store.addMessage.bind(store)}
    />, document.getElementById('root'));
}

serviceWorker.unregister();
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);