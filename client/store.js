import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { addFormSubmitSagaTo } from 'redux-form-submit-saga'
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

  sagaMiddleware.run(addFormSubmitSagaTo(rootSaga))

  return store
}

export default configureStore
