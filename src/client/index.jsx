/* eslint-disable import/order */

// Polyfills and third party libs
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Import dependencies
import React from 'react'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { App } from './components/app'
import configureStore from './store'

// Globally scoped css
import './index.css'

// Enable tap event plugin polyfill, to remove 300ms tap delay
injectTapEventPlugin()

const history = createBrowserHistory()
const store = configureStore({}, history)

render(<App store={store} history={history} />, document.getElementById('app'))
