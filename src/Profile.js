import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const data = {
    velopert : {
        name : '강호동',
        decription : '리액트를 좋아하는 개발자'
    },
    gildong : {
        name : '홍길동',
        decription : '고전 소설 홍길동전의 주인공'
    }
}

function useQuery () {
    const {search} = useLocation();
    return useMemo(()=> new URLSearchParams(search), [search]);
}

const Profile = ({location}) => {

    

    const {username} = useParams();

    const profile = data[username];

    let query = useQuery();
    console.log(1211);
    if(!profile){
        return <div>존재하지 않음</div>
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.decription}</p>
        </div>
    );
};

export default Profile;