import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          direction: "rtl",
          width: "500px",
        }}
      >
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
