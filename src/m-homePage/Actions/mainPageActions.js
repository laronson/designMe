import { createAction } from 'redux-actions';

export const setNumber = (number) => (
	(dispatch) => {
		dispatch(createAction("SET_NUMBER")({number}));
		return;
	}
);