import React, { PropTypes } from 'react'
import Router from 'react-router/BrowserRouter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import Routes from './Routes'

function App({ store }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
