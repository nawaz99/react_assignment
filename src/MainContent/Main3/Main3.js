import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import dropbox from '../../images/dropbox.png';
import medium from '../../images/medium.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Main3.css';

const Main3 = () => {
	const [ state, setState ] = useState({
		data: [
			{
				orderRef: 'CDD1049',
				customer: 'Ekatorina',
				date: '12/04/2019',
				status: 'pending'
			},
			{
				orderRef: 'CDD1048',
				customer: 'Cao Yu',
				date: '12/04/2019',
				status: 'deliveried'
			}
		]
	});

	return (
		<div className="main3 font-small">
			<div className="latestproducts items-bg border-light-grey">
				<div className="box1 border-bottom">Latest products</div>
				<div className="box2">
					<div className="dropbox border-bottom">
						<img src={dropbox} alt="dropbox" />
						<div className="l1">
							<h5 className="name">Dropbox</h5>
							<h6 className="update items-color">Updated 2 hours ago</h6>
						</div>
						<MoreVertIcon fontSize="small" className="items-color dots cursor" />
					</div>
					<div className="medium">
						<img src={medium} alt="" />
						<div className="l2">
							<h5 className="name">Medium Corporation</h5>
							<h6 className="update items-color">Updated 2 hours ago</h6>
						</div>
						<MoreVertIcon fontSize="small" className="items-color dots cursor" />
					</div>
				</div>
			</div>
			<div className="latestorders items-bg border-light-grey">
				<div className="lbox1 border-bottom">
					<div>Latest Order</div>
					<button className="lbtn items-color cursor">NEW ENTRY</button>
				</div>
				<div className="lbox2 border-bottom">
					<table className="table" width="100%">
						<thead>
							<tr className="items-color line1">
								<th className="line1-item">Order Ref</th>
								<th className="line1-item">Customer</th>
								<th className="line1-item">
									<span>Date</span> <ArrowDownwardIcon fontSize="small" className="arrowdown" />
								</th>
								<th className="line1-item">Status</th>
							</tr>
						</thead>
						<tbody>
							{state.data.map((v,i) => {
								return (
									<tr className="line2 border-bottom font-small" key={i+6}>
										<td className="line2-item">{v.orderRef}</td>
										<td className="line2-item">{v.customer}</td>
										<td className="line2-item">{v.date}</td>
										<td className="line2-item">
											<FiberManualRecordIcon
												fontSize="small"
												style={{
													color: `${v.status === 'deliveried' ? 'green' : 'red'}`,
													fontSize: '0.4rem',
													position: 'relative',
													left: '-0.4rem'
												}}
											/>
											{v.status}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Main3;
