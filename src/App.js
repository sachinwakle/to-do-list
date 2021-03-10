import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { createRef } from "react";
import MainPage from "./components/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const appRef = createRef();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" ref={appRef}>
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
