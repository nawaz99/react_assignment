import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import './Chart.css';

const Chart = () => {
	const labels = [ 'desktop', 'tablet', 'mobile' ];
	const chartData = {
		datasets: [
			{
				label: 'Users',
				data: [
					Math.floor(Math.random() * 99) + 1,
					Math.floor(Math.random() * 99) + 1,
					Math.floor(Math.random() * 99) + 1
				],
				backgroundColor: [ 'rgb(60, 79, 170)', 'rgb(233,56,52)', 'rgb(247,138,0)' ]
			}
		]
	};
	const [ state, setState ] = useState({
		chartData: {
			datasets: [
				{
					label: 'Users',
					data: [ 63, 15, 23 ],
					backgroundColor: [ 'rgb(60, 79, 170)', 'rgb(233,56,52)', 'rgb(247,138,0)' ]
				}
			]
		}
	});

	return (
		<div className="chart border-light-grey items-bg">
			<div className="users border-bottom">
				<span>Users By device</span>
				<span onClick={() => {setState({ chartData })}}>
				<RefreshSharpIcon fontSize="small" className="refresh"/>
				</span>
			</div>

			<div className="circle">
				<Doughnut
					data={state.chartData}
					width={60}
					height={50}
					options={{
						cutoutPercentage: 85,
						responsive: true
					}}
				/>
			</div>

			<div className="percentages items-color">
				<div className="labels1">
					<LaptopIcon />
					<PhoneAndroidIcon />
					<TabletAndroidIcon />
				</div>

				<div className="labels2 font-small">{labels.map((l, i) => <div key={i}>{l}</div>)}</div>

				<div className="p">
					{state.chartData.datasets[0].data.map((v,i) => (
						<div className="val" key={i+1}>
							{v}%
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Chart;
