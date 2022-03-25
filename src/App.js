import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost} from "./Redux/State";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

const App = (props) => {

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='wrappe'>
                    <Header/>
                    <div className='app-wrapper'>
                        <Navbar
                            stateData={props.state.navigationBar}
                            stateAvatar={props.state.avatarBase}/>
                        <div className='app-wrapper-content'>
                            <Routes>
                                <Route path="/profile"
                                       element={<Profile
                                           stateData={props.state.profilePage}
                                           addPost={props.addPost}
                                           updateNewPostText={props.updateNewPostText}
                                       />}/>
                                <Route path="/dialogs/*"
                                       element={<Dialogs
                                           stateData={props.state.messagesPage}
                                           updateNewMessageText={props.updateNewMessageText}
                                           addMessage={props.addMessage}
                                       />}/>
                                <Route path="/news"
                                       element={<News/>}/>
                                <Route path="/music"
                                       element={<Music/>}/>
                                <Route path="/settings"
                                       element={<Settings/>}/>
                            </Routes>
                        </div>
                    </div>
                    <div className='footer'>
                        &copy; Rodriguez project
                    </div>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App;
