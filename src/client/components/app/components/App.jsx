import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import { object } from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import Routes from './Routes'

function App({ store, history }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

App.propTypes = {
  store: object.isRequired,
  history: object.isRequired
}

export default App
