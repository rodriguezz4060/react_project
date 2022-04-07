import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reduscer";
import profileReducer from "./profile-reducer";
import navigationBarReducer from "./navigationBar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: navigationBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;