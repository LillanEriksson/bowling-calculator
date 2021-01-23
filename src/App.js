/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { bowling } from './reducers/bowling';
import { Scoreboard } from './components/Scoreboard';

const reducer = combineReducers({ bowling: bowling.reducer });

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Scoreboard />
		</Provider>
	);
};
