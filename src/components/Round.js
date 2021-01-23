/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

export const Round = ({ roll1, roll2 }) => {
	const roundScore = roll1 + roll2;

	return (
		<RoundContainer>
			<RollsContainer>
				<Roll>{roll1}</Roll>
				<Roll>{roll2}</Roll>
			</RollsContainer>
			<Score>{roundScore}</Score>
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
