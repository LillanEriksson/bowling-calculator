import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Round = ({ roll1, roll2, index }) => {
	const allScores = useSelector((store) => store.bowling.allScores);

	const roundScore = roll1 + roll2;

	// calculates the score for each round and adds points for strike and block
	//not working
	const scoreCalc = () => {
		if (allScores.length < 1) {
			if (roll1 === 10 || roll1 + roll2 === 10) {
				return roundScore + 10;
			} else {
				return roundScore;
			}
		} else if (allScores.length >= 1) {
			const slicedScore = allScores.slice(0, index);
			const sum = (accumulator, number) => {
				return accumulator + number;
			};
			const score = slicedScore.reduce(sum, roundScore);
			if (roll1 === 10 || roll1 + roll2 === 10) {
				return score + 10;
			} else {
				return score;
			}
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
