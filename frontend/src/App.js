import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Home from './components/Home'

const App = () => {
  const mode = localStorage.getItem('darkMode') === 'dark' ? 'dark' : 'light'
  const [darkMode, setDarkMode] = useState(mode)

  const theme = createTheme({
    palette: {
      mode: darkMode,
    },
  })

  const toggleColorMode = () => {
    if (darkMode === 'dark') {
      localStorage.setItem('darkMode', 'light')
      setDarkMode('light')
    }
    if (darkMode === 'light') {
      localStorage.setItem('darkMode', 'dark')
      setDarkMode('dark')
    }
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='sm'>
          <Header toggleColorMode={toggleColorMode} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/' component={Home} exact />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
