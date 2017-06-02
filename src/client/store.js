import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { addFormSubmitSagaTo as formSaga } from 'redux-form-submit-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { middleware as errorMiddleware } from './data/error'

// Initialize devtools when available
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Returns a store and accepts an initial state
const configureStore = (preloadedState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history), errorMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  sagaMiddleware.run(formSaga())

  return store
}

export default configureStore
