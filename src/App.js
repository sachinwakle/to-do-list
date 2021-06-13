import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { createRef } from "react";
import { useSelector } from "react-redux";
import MainPage from "./components/MainPage";

function App() {
  const appTheme = useSelector((state) => state.theme);
  const appRef = createRef();
  const theme = createMuiTheme({
    palette: {
      type: appTheme.type,
      primary: {
        main:'#3b5998'
      },
      secondary: {
        main: '#ffc400',
        contrastText: "#fff",
      },
    },
  });

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
