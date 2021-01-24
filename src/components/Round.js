/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Round = ({ roll1, roll2, index, lastScore, totalScore }) => {
	const allScores = useSelector((store) => store.bowling.allScores);
	const currentScore = useSelector((store) => store.bowling.currentScore.score);
	const roundScore = roll1 + roll2;

	return (
		<RoundContainer>
			<RollsContainer>
				<Roll>{roll1}</Roll>
				<Roll>{roll2}</Roll>
			</RollsContainer>
			<Score>
				{index === 0
					? roundScore
					: index >= 1
					? roundScore + lastScore
					: totalScore}
			</Score>
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
