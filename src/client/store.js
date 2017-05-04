import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { addFormSubmitSagaTo as formSaga } from 'redux-form-submit-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// Initialize devtools
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

// Returns a store and accepts an initial state
const configureStore = (preloadedState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)), devTools)
  )

  sagaMiddleware.run(rootSaga)
  sagaMiddleware.run(formSaga())

  return store
}

export default configureStore
