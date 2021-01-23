/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { bowling } from '../reducers/bowling';

export const Button = ({ number, text, name, roll1, roll2, key }) => {
	const dispatch = useDispatch();

	const handleNext = () => {
		dispatch(bowling.actions.setCurrentRound());
		dispatch(bowling.actions.calculateTotalScore());
	};

	const handleRoll = () => {
		if (roll1 === null) {
			dispatch(bowling.actions.setRoll1(number));
			if (number === 10) {
				handleNext();
			}
		} else if (roll2 === null) {
			dispatch(bowling.actions.setRoll2(number));
		}
	};

	return (
		<StyledButton
			type="button"
			name={name}
			onClick={name === 'Next' ? handleNext : () => handleRoll()}>
			{text}
		</StyledButton>
	);
};

// styling
const StyledButton = styled.button`
	border-radius: 12px;
	margin: 5px;
`;
