import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {

    const navigate = useNavigate();

	// 뒤로가기
	// 인덱스로 처리, 두번 뒤로 가고싶으면 -2
	const handleGoBack = () => {
		navigate(-1);
	}

	// 홈으로 가기
	const handleGoHome = () => {
		navigate('/');
	}

    // 강호동으로 가기
	const handleGoGang = () => {
		navigate('/profiles/velopert');
	}
    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
            <button onClick={handleGoGang}>강호동 프로필</button>
        </div>
    );
};

export default History;