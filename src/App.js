import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContiner";
import UsersContainer from "./components/Users/UsersContainer";

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

const App = () => {
    return (
        <ErrorBoundary>
            <div className='wrappe'>
                <Header/>
                <div className='app-wrapper'>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile"
                                   element={<Profile/>}/>
                            <Route path="/dialogs/*"
                                   element={<DialogsContainer/>}/>
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
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
        </ErrorBoundary>
    )
}

export default App;
