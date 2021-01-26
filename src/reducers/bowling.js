import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	roll1: null,
	roll2: null,
	historicRolls: [],
	currentScore: null,
	allScores: [],
	totalScore: 0,
	strike: 0,
	block: 0,
};

export const bowling = createSlice({
	name: 'bowling',
	initialState,
	reducers: {
		setRoll1: (store, action) => {
			const roll1 = action.payload;
			store.roll1 = roll1;
		},
		setRoll2: (store, action) => {
			const roll2 = action.payload;
			store.roll2 = roll2;
		},
		setCurrentRound: (store) => {
			if (store.historicRolls.length <= 9) {
				const currentScore = store.roll1 + store.roll2;
				// the score for one round into store
				store.currentScore = currentScore;
				// adds the score for a round into a array of all scores from all rounds
				store.allScores = [...store.allScores, currentScore];
				// create a object for the historicRolls array that saves rolls and total score for round
				const newRoll = {
					roll1: store.roll1,
					roll2: store.roll2,
					score: store.currentScore,
				};
				// the object with the info into the history-array
				store.historicRolls = [...store.historicRolls, newRoll];
				// set the values of roll1 & roll 2 to null
				store.roll1 = null;
				store.roll2 = null;
			}
		},
		setStrike: (store, action) => {
			// not sure how to fix this
			const strike = action.payload;
			store.strike = strike;
		},

		setBlock: (store, action) => {
			const block = action.payload;
			store.block = block;
		},
		addStrikeorBlockPoints: (store, action) => {
			const strike = store.strike;
			const block = store.block;

			const itemToUpdate = store.allScores.length - 1;
			store.allScores[itemToUpdate] += strike;
			store.allScores[itemToUpdate] += block;

			store.block = 0;
			store.strike = 0;
		},

		calculateTotalScore: (store) => {
			// this is not accurate...yet
			const totalScore = store.allScores.reduce((a, b) => a + b);
			store.totalScore = totalScore;
		},
	},
});
