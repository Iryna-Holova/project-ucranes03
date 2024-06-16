import { themeStorageKey, themes } from 'constants/themes';

const rootElement = document.documentElement;

const theme = localStorage.getItem(themeStorageKey);

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem(themeStorageKey);
  if (!theme) {
    localStorage.setItem(themeStorageKey, themes.LIGHT);
    rootElement.dataset.theme = themes.LIGHT;
  } else {
    const newTheme = currentTheme === themes.LIGHT ? themes.DARK : themes.LIGHT;
    localStorage.setItem(themeStorageKey, newTheme);
    rootElement.dataset.theme = newTheme;
  }
};

export const setInitialTheme = () => {
  if (!theme) {
    localStorage.setItem(themeStorageKey, themes.LIGHT);
    rootElement.dataset.theme = themes.LIGHT;
  } else {
    rootElement.dataset.theme = theme;
  }
};
