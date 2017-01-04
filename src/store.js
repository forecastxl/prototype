import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const configureStore = (preloadedState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  )

  sagaMiddleware.run(rootSaga)

  // enable hot module reloading, will be stripped during production
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/app', () => {
      const nextRootReducer = require('./components/app').App
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
