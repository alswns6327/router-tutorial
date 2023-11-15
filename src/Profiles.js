import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">강호동</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">홍길동</Link>
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