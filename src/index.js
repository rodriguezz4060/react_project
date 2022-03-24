import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);

serviceWorker.unregister();
