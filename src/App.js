import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './modules'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import MyRegion from './pages/MyRegion'
import EntireRegion from './pages/EntireRegion'
import BookMark from './pages/BookMark'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<MyRegion />} />
          <Route path='my-region' element={<MyRegion />} />
          <Route path='entire-region' element={<EntireRegion />} />
          <Route path='bookmark' element={<BookMark />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
