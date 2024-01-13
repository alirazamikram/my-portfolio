interface ThemeState {
  mode: "dark" | "light";
}

interface ToggleThemeAction {
  type: "TOGGLE_THEME";
}

type ThemeAction = ToggleThemeAction;

const themeReducer = (
  state: ThemeState = { mode: "dark" },
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { mode: state.mode === "dark" ? "light" : "dark" };
    default:
      return state;
  }
};

export default themeReducer;
