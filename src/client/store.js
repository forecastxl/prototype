import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { addFormSubmitSagaTo as formSaga } from 'redux-form-submit-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const configureStore = (preloadedState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )

  sagaMiddleware.run(rootSaga)
  sagaMiddleware.run(formSaga())

  return store
}

export default configureStore
