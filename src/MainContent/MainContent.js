import React from 'react';
import Main1 from './Main1/Main1';
import Main2 from './Main2/Main2';
import Main3 from './Main3/Main3';
import './MainContent.css';
const MainContent = () => {
	return (
		<div className="main-content">
			<Main1 />
			<Main2 />
			<Main3 />
		</div>
	);
};

export default MainContent;
