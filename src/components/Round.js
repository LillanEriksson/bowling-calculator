/* eslint-disable linebreak-style */
import React from 'react';

export const Round = ({ roll1, roll2 }) => {
	console.log(roll1);
	return (
		<div>
			<div>
				<div>One: {roll1}</div>
				<div>Two: {roll2}</div>
			</div>
			<div>Score for this round</div>
		</div>
	);
};
