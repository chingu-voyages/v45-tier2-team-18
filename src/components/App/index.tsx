import React from 'react'
import { ConfigProvider } from 'antd'
import logo from '../../assets/logo.svg'
import { ANT_THEME_TOKEN } from '../../data/constants'
import './App.css'

function App() {
  return (
    <ConfigProvider theme={{ token: ANT_THEME_TOKEN }}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </ConfigProvider>
  )
}

export default App
