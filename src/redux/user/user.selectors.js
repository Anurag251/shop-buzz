import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrenetUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
