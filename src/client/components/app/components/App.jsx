import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import React from 'react'
import { object } from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { muiTheme } from '../../../styles'
import Routes from './Routes'

function App({ store, history }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
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
