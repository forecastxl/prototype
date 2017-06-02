import configureMockStore from 'redux-mock-store'
import { createAction } from 'redux-actions'
import errorMiddleware from './middleware'
import * as actions from './actions'

const mockStore = configureMockStore([errorMiddleware])
const errorAction = createAction('ERROR')

describe('error middleware', () => {
  it('should catch errors', () => {
    const store = mockStore({})
    const error = new Error('message')
    error.status = 412
    const expectedActions = [
      actions.catchError({ message: error.message, status: error.status }),
      errorAction(error)
    ]

    store.dispatch(errorAction(error))

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should ignore submission errors', () => {
    const store = mockStore({})
    const error = new Error('message')
    error.name = 'SubmissionError'
    const expectedActions = [errorAction(error)]

    store.dispatch(errorAction(error))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
