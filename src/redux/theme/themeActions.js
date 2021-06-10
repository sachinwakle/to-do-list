import { APPLY_DARK, APPLY_LIGHT } from "./themeActionTypes";

const requestDarkTheme = () => {
  return {
    type: APPLY_DARK,
  };
};

const requestLightTheme = () => {
  return {
    type: APPLY_LIGHT,
  };
};

export { requestDarkTheme, requestLightTheme };
