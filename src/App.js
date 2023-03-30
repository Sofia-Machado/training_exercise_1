import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import ExerciseTable from './ExerciseTable';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExerciseTable />
    </ThemeProvider>
  );
}

export default App;
