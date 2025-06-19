import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Home/Header'
import Footer from './Home/Footer'
import MiddlePart from './Home/MiddlePart'
import { Box } from '@mui/material';
function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        
      }}
    >
      <Header />

      {/* Main content that grows */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <MiddlePart />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;