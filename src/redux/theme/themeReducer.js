import { APPLY_DARK, APPLY_LIGHT } from "./themeActionTypes";

const DARK = "dark";
const LIGHT = "light";

const initialState = {
  type: LIGHT,
  isOn: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_LIGHT:
      return {
        ...state,
        type: LIGHT,
        isOn: true,
      };

    case APPLY_DARK:
      return {
        ...state,
        type: DARK,
        isOn: false,
      };

    default:
      return state;
  }
};

export default themeReducer;
