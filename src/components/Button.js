import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { bowling } from '../reducers/bowling';

export const Button = ({ number, text, roll1, roll2 }) => {
	const dispatch = useDispatch();

	const currentScore = useSelector((store) => store.bowling.currentScore);

	// go to next round and set the whole round to state
	const handleNext = () => {
		dispatch(bowling.actions.setCurrentRound());
		dispatch(bowling.actions.addStrikeorBlockPoints());
		dispatch(bowling.actions.calculateTotalScore());
	};

	// set the rolls to state
	const handleRoll = () => {
		dispatch(bowling.actions.setStrike(0));
		dispatch(bowling.actions.setBlock(0));
		if (roll1 === null) {
			dispatch(bowling.actions.setRoll1(number));
			if (number === 10) {
				dispatch(bowling.actions.setRoll1(number));
				dispatch(bowling.actions.setStrike(10));
				handleNext();
			}
		} else if (roll2 === null) {
			dispatch(bowling.actions.setRoll2(number));
			if (currentScore === 10) {
				dispatch(bowling.actions.setBlock(10));
				handleNext();
			} else {
				handleNext();
			}
		}
	};

	return (
		<StyledButton type="button" onClick={() => handleRoll()}>
			{text}
		</StyledButton>
	);
};

// styling
const StyledButton = styled.button`
	border-radius: 12px;
	margin: 5px;
  
  }
 }
`;
