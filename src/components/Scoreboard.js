import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Round } from './Round';
import { TotalScore } from './TotalScore';
import { Button } from './Button';

export const Scoreboard = () => {
	const roll1 = useSelector((store) => store.bowling.roll1);
	const roll2 = useSelector((store) => store.bowling.roll2);
	const historicRolls = useSelector((store) => store.bowling.historicRolls);
	const totalScore = useSelector((store) => store.bowling.totalScore);

	// array for the bowling-pins so I can map over it to make buttons
	const pinsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<Container>
			<div>
				{pinsArray.map((item, index) =>
					roll1 + item <= 10 ? (
						<Button
							key={index}
							text={item}
							number={item}
							roll1={roll1}
							roll2={roll2}
						/>
					) : null
				)}
			</div>

			<Scorecard>
				{historicRolls.map((item, index) => {
					return (
						<Round
							key={index}
							roll1={item.roll1}
							roll2={item.roll2}
							index={index}
						/>
					);
				})}
				<Round roll1={roll1} roll2={roll2} totalScore={totalScore} />
				<TotalScore />
			</Scorecard>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`;

const Scorecard = styled.div`
	display: flex;
`;
