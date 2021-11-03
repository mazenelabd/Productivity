import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  const toggleColorMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='sm'>
          <Header toggleColorMode={toggleColorMode} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
