import React from 'react';
import './Header.css';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

const Header = () => {
	return (
		<header className="header color">
			<div className="icons">
				<NotificationsNoneSharpIcon className="icon" />
				<ExitToAppSharpIcon className="icon" />
			</div>
		</header>
	);
};

export default Header;
