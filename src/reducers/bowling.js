/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	roll1: null,
	roll2: null,
	currentRoll: {},
	historicRolls: [],
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
		setCurrentRound: (store, action) => {
			const newRolls = {
				1: store.roll1,
				2: store.roll2,
			};
			const rollsArray = [...store.historicRolls, newRolls];
			store.historicRolls = rollsArray;
		},
		calculateTotalScore: (store, action) => {},
	},
});
