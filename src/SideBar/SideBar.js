import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import usrimg from '../images/1.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import upgrade from '../images/upgrade.png'
const SideBar = () => {
	return (
		<div>
			<input type="checkbox" id="check" />
			<label htmlFor="check">
				<MenuIcon id="sidebar_btn" />
			</label>
			<div className="sidebar border-light-grey items-bg">
				<center>
					<img src={usrimg} alt="user" className="profile_image" />
					<h4>Shen Zhi</h4>
					<h5 className="items-color font-small">Bran Deserunt</h5>
				<div className="line"></div>
				</center>
				<Link to="/" className="active">
					<DashboardIcon className="micon" />
					<span>Dashboard</span>
				</Link>
				<Link to="/users">
					<GroupIcon className="micon" />
					<span>Users</span>
				</Link>
				<Link to="/products">
					<ShoppingBasketIcon className="micon" />
					<span>Products</span>
				</Link>
				<Link to="/authentication">
					<LockOpenIcon className="micon" />
					<span>Authentication</span>
				</Link>
				<Link to="/typography">
					<TextFieldsIcon className="micon" />
					<span>Typography</span>
				</Link>
				<Link to="/icons">
					<ImageIcon className="micon" />
					<span>Icons</span>
				</Link>
				<Link to="/account">
					<AccountBoxIcon className="micon" />
					<span>Account</span>
				</Link>
				<Link to="/settings">
					<SettingsIcon className="micon" />
					<span>Settings</span>
				</Link>

				<div className="upgrade">
					<img src={upgrade}  alt="upgrade" />
					<h5>Upgrade to PRO</h5>

					<h6 className="items-color">Upgrade to device Kit Pro and</h6>
					<h6 className="items-color">get overmore components</h6>

					<Button size="medium" className="btn"  variant="contained" color="primary">
						UPGRADE
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
