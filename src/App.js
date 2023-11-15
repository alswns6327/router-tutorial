import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

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
            </ul>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path={'/about'} Component={About}></Route>
            </Routes>            
        </div>
    );
};

export default App;