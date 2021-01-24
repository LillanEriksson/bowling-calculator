/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	roll1: null,
	roll2: null,
	historicRolls: [],
	currentScore: {},
	allScores: [],
	totalScore: null,
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
			if (store.historicRolls.length < 9) {
				const currentScore = { score: store.roll1 + store.roll2 };
				store.currentScore = currentScore;
				store.allScores = [...store.allScores, currentScore.score];
				const newRoll = {
					roll1: store.roll1,
					roll2: store.roll2,
					score: store.currentScore.score,
				};

				store.historicRolls = [...store.historicRolls, newRoll];

				store.roll1 = null;
				store.roll2 = null;
			}
		},

		calculateTotalScore: (store) => {
			const totalScore = store.allScores.reduce((a, b) => a + b);
			store.totalScore = totalScore + store.currentScore.score;
		},
	},
});
