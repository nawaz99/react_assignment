import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Bar } from 'react-chartjs-2';

import './Barchart.css';
const Barchart = () => {
	const [ state, setState ] = useState({
		chartData: {
			labels: [ '1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug' ],
			datasets: [
				{
					label: 'sales1',
					stack: 'Stack 0',
					barPercentage: 0.5,
					barThickness: 6,
					backgroundColor: 'rgb(60, 79, 170)',
					borderWidth: 0,
					data: [ 18, 5, 19, 25, 27, 20 ]
				},
				{
					label: 'sales2',
					barPercentage: 0.5,
					barThickness: 6,
					maxBarThickness: 8,
					backgroundColor: 'lightgrey',
					borderWidth: 0,
					data: [ 10, 20, 13, 27, 29, 25 ]
				}
			]
		}
	});

	const chartData = {
		labels: [ '1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug' ],
		datasets: [
			{
				label: 'sales1',
				stack: 'Stack 0',
				barThickness: 6,
				backgroundColor: 'rgb(60, 79, 170)',
				borderWidth: 0,
				data: [
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1
				]
			},
			{
				label: 'sales2',
				barThickness: 6,
				maxBarThickness: 8,
				backgroundColor: 'lightgrey',
				borderWidth: 0,
				data: [
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1,
					Math.floor(Math.random() * 29) + 1
				]
			}
		]
	};

	return (
		<div className="barchart border-color items-bg">
			<div className="sales border-bottom font-small">
				<div className="latestsales">Latest Sales</div>
				<div className="last7days">
					<select name="days" className="days font-small" onClick={() => setState({ chartData })}>
						<option value="LAST 7 DAYS">LAST 7 DAYS</option>
						<option value="LAST 20 DAYS">LAST 20 DAYS</option>
						<option value="LAST 30 DAYS">LAST 30 DAYS</option>
						<option value="LAST 60 DAYS">LAST 60 DAYS</option>
					</select>
					<ArrowDropDownIcon fontSize="small" className="drop" />
				</div>
			</div>
			<div className="mainchart">
				<Bar
					data={state.chartData}
					width={100}
					height={35}
					options={{
						legend: {
							display: false
						},
						responsive: true,
						scales: {
							yAxes: [
								{
									ticks: {
										fontSize: 10,
										beginAtZero: true
									},
									gridLines: {
										display: false
									}
								}
							],
							xAxes: [
								{
									gridLines: {
										display: false
									},
									ticks: {
										fontSize: 10
									}
								}
							]
						}
					}}
				/>
			</div>
			<div className="overview last7days">
				<select name="overiew" className="font-small">
					<option value="overiew">OVERVIEW</option>
				</select>
				<ArrowRightIcon fontSize="small" className="drop" />
			</div>
		</div>
	);
};

export default Barchart;
