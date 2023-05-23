import React from 'react';
import createDataContext from './createDataContext';
import { AuthStateType } from './types';

const initialState: AuthStateType = {
  isloggedIn: false,
};
const authReducer: React.Reducer<AuthStateType, any> = (
  state = initialState,
  action
): AuthStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {},
  initialState
);
