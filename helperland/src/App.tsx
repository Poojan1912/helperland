import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Faq from './pages/Faq';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import About from './pages/About';
import BecomeAPro from './pages/BecomeAPro';
import ServiceProvider from './pages/ServiceProvider';
import ServiceHistory from './pages/ServiceHistory'
import UserManagement from './pages/UserManagement';

function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '50px',
        fontWeight: 'medium'
      },
      h2: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#4F4F4F'
      },
      h3: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#565656'

      },
      h4: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#4F4F4F'

      },
      h5: {
        fontSize: '18px',
        color: '#353548',
        fontWeight: '500'
      },
      h6: {
        fontSize: '0.67rem',
        fontWeight: 'bold'
      },
      body1: {
        fontSize: '16px',
        color: '#565656'
      },
      body2: {
        fontSize: '14px',
        color: '#8E8E8E'
      },
      caption: {
        color: '#A3A3A3',
        fontSize: 13
      }
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }
    },

    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: 1140,
          }
        }
      }
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/become-a-pro" element={<BecomeAPro />} />
            <Route path="/service-provider" element={<ServiceProvider />} />
            <Route path="/service-history" element={<ServiceHistory />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
