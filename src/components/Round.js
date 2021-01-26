import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Round = ({ roll1, roll2, index }) => {
	const allScores = useSelector((store) => store.bowling.allScores);

	const roundScore = roll1 + roll2;

	// calculates the score for each round and adds points for strike and block
	//not working
	const scoreCalc = () => {
		if (index === 0) {
			return allScores[0];
		} else {
			const slicedScore = allScores.slice(0, index);
			const sum = (accumulator, number) => {
				return accumulator + number;
			};
			return slicedScore.reduce(sum, roundScore);
		}
	};

	return (
		<RoundContainer>
			<RollsContainer>
				<Roll>{roll1}</Roll>
				<Roll>{roll2}</Roll>
			</RollsContainer>
			<Score>{scoreCalc()}</Score>
		</RoundContainer>
	);
};

const RoundContainer = styled.div`
	border: 2px black dotted;
	padding: 2px;
`;

const RollsContainer = styled.div`
	display: flex;
`;

const Roll = styled.div`
	display: flex;
	justify-content: center;
	border: 1px blue solid;
	padding: 5px;
	height: 20px;
	width: 20px;
`;

const Score = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
`;
