import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, { PropTypes } from 'react'
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
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App
