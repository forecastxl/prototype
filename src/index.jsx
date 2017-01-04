// polyfills and third party libs
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import dependencies
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { App } from './components/app'
import configureStore from './store'

// globally scoped css
import './index.css'

// enable tap event plugin polyfill, to remove 300ms tap delay
injectTapEventPlugin()

// create store, history and render function for hot reloading
const history = createBrowserHistory()
const store = configureStore({}, history)
const renderWithHotReload = AppComponent => {
  render(
    <AppContainer>
      <AppComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
  )
}

// initial render
renderWithHotReload(App)

// enable hot reloading, will be stripped in production
if (module.hot) {
  // reload components
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').App
    renderWithHotReload(NextApp)
  })

  // reload reducers
  module.hot.accept('./rootReducer', () => {
    const nextRootReducer = require('./rootReducer').default
    store.replaceReducer(connectRouter(history)(nextRootReducer))
  })
}

// export the store for outside access
export { store }
