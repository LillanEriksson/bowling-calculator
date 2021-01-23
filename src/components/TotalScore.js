import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const TotalScore = () => {
	const totalScore = useSelector((store) => store.bowling.totalScore);
	return (
		<TotalScoreContainer>
			<h3>{totalScore}/300</h3>
		</TotalScoreContainer>
	);
};

const TotalScoreContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px black dotted;
	padding: 2px;
`;
