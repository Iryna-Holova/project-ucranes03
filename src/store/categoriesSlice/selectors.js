import { createSelector } from '@reduxjs/toolkit';

export const selectCategories = state => state.categories.items;
export const selectError = state => state.categories.error;
export const selectIsLoading = state => state.categories.isLoading;
export const selectCategoriesOptions = createSelector(
  selectCategories,
  categories => categories.map(({ _id, name }) => ({ value: _id, label: name }))
);
export const selectActiveCategory = createSelector(
  [selectCategories, (_, itemId) => itemId],
  (items, itemId) => items?.find(({ _id }) => _id === itemId)
);
