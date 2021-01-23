import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bowling } from '../reducers/bowling';

export const Button = ({ number, text, name }) => {
	const dispatch = useDispatch();
	const roll1 = useSelector((store) => store.bowling.roll1);
	const roll2 = useSelector((store) => store.bowling.roll2);

	const handleRoll = () => {
		if (roll1 === null) {
			dispatch(bowling.actions.setRoll1(number));
		} else if (roll2 === null) {
			dispatch(bowling.actions.setRoll2(number));
		}
	};

	const handleNext = () => {
		dispatch(bowling.actions.setCurrentRound());
	};

	return (
		<button
			type="button"
			name={name}
			onClick={name === 'Next' ? handleNext : handleRoll}>
			{text}
		</button>
	);
};
