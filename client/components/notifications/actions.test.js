import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a RNS_SHOW_NOTIFICATION action', () => {
    const level = 'success'
    const options = { title: 'title', message: 'message', uid: 1 }
    expect(actions.addNotification({ level, options })).toMatchSnapshot()
  })
})
