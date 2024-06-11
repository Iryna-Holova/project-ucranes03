import { createSelector } from '@reduxjs/toolkit';

export const selectIngredients = state => state.indgredients.items;
export const selectError = state => state.indgredients.error;
export const selectIsLoading = state => state.indgredients.isLoading;
export const selectFilter = state => state.indgredients.filter;
export const selectIngredientsOptions = createSelector(
  selectIngredients,
  ingredients => {
    return ingredients.map(({ _id, name }) => ({ value: _id, label: name }));
  }
);
