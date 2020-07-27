import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoneyIcon from '@material-ui/icons/Money';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import './Main1.css';
const Main1 = () => {
	const [ budget, setBudget ] = useState({
		budget: '24,000',
		percentage: 12
	});

	const [ users, setUsers ] = useState({
		users: '16,00',
		percentage: 18
	});

	const [ taskprogress, setTaskprogress ] = useState({
		progress: 75.5
	});

	const [ profit, setProfit ] = useState({
		profit: '23,200'
	});

	return (
		<div className="main1">
			<div className="main1-box border-light-grey items-bg">
				<span className="top">
					<div className="left">
						<h6 className="items-color">BUDGET</h6>
						<h4 className="align-left">
							<AttachMoneyIcon fontSize="small" className="dollar" />
							{budget.budget}
						</h4>
					</div>
					<MoneyIcon className="red-bg-white" />
				</span>
				<span className="bottom">
					<ArrowDownwardIcon className="red size" /> {budget.percentage}% Since last month
				</span>
			</div>
			<div className="main1-box border-light-grey items-bg">
				<span className="top">
					<div className="left">
						<h6 className="items-color">TOTAL USERS</h6>
						<h4>{users.users}</h4>
					</div>
					<PeopleOutlineSharpIcon className="green-bg-white" />
				</span>
				<span className="bottom">
					<ArrowUpwardIcon className="green size" /> {users.percentage}% Since last month
				</span>
			</div>
			<div className="main1-box border-light-grey items-bg">
				<span className="top">
					<div className="left">
						<h6 className="items-color">TASKS PROGRESS</h6>
						<h4>{taskprogress.progress}%</h4>
					</div>
					<AssessmentOutlinedIcon className="blue-bg-white" />
				</span>
				<span className="bottom">
					<div className="white-bg">
						<div className="color" style={{width: `${taskprogress.progress}%`, height: '0.1rem' }} />
					</div>
				</span>
			</div>
			<div className="main1-box border-light-grey items-bg blue-bg-white">
				<span className="top">
					<div className="left">
						<h6>TOTAL PROFIT</h6>
						<h4 className="align-left">
							<AttachMoneyIcon fontSize="small" className="dollar" />
							{profit.profit}
						</h4>
					</div>
					<AttachMoneyIcon fontSize="default" className="white-bg-blue"/>
				</span>
			</div>
		</div>
	);
};

export default Main1;
