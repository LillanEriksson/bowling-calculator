/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bowling } from '../reducers/bowling';

import { Round } from './Round';
import { TotalScore } from './TotalScore';
import { Button } from './Button';

export const Scoreboard = () => {
	const dispatch = useDispatch();

	const pinsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div>
			{pinsArray.map((item, index) => (
				<Button key={index} text={item} number={item} name="Numbers" />
			))}

			<Round />
			<Button text="Next round" name="Next" />
			<TotalScore />
		</div>
	);
};
