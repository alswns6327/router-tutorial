import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import History from './History';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path={'/about'} Component={About}></Route>
                <Route path={'/profiles/*'} Component={Profiles}></Route>
            </Routes>
            <History></History>          
        </div>
    );
};

export default App;