import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { bowling } from '../reducers/bowling';

export const Button = ({ number, text, roll1, roll2 }) => {
	const dispatch = useDispatch();

	const historicRolls = useSelector((store) => store.bowling.historicRolls);
	console.log(historicRolls.length);

	// go to next round and set the whole round to state
	const handleNext = () => {
		dispatch(bowling.actions.setCurrentRound());
		dispatch(bowling.actions.calculateTotalScore());
	};

	// set the rolls to state
	const handleRoll = () => {
		if (roll1 === null) {
			dispatch(bowling.actions.setRoll1(number));
			if (number === 10) {
				dispatch(bowling.actions.setRoll1(number));
				// dispatch(bowling.actions.setStrike(10));
				handleNext();
			}
		} else if (roll2 === null) {
			dispatch(bowling.actions.setRoll2(number));
			handleNext();
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
