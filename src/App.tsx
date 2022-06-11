import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import SignIn from './features/auth/SignIn';
import Copyright from './components/Copyright';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './features/auth/SignUp';
import Topbar from './components/Topbar';
import HomePage from './features/home/Home';

declare module '@mui/material/styles' {
  interface Palette {
    appBar: Palette['primary'];
  }
  interface PaletteOptions {
    appBar: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#472365'
    },
    secondary: {
      main: '#95DDD4'
    },
    appBar: {
      main: '#fff'
    },
    background: {
      default: '#F8F8F8',
      paper: '#fff'
    }
  }
});


function App() {

  return (
    <Router>

      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline />
          <Topbar />
          <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
