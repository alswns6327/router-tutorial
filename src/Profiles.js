import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background : 'white',
        color : 'black'
    }
    
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink style={({isActive}) => ( isActive ? activeStyle : {})} to="/profiles/velopert">강호동</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => (isActive ? activeStyle : {})} to="/profiles/gildong">홍길동</NavLink>
                </li>
            </ul>
            <Routes>
            <Route path='/' Component={()=><div>사용자를 선택해주세요.</div>}/>
                <Route path='/:username' Component={Profile}/>
            </Routes>
        </div>
    );
};

export default Profiles;