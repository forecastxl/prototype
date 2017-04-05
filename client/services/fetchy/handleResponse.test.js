import handleResponse from './handleResponse'
import { transformResponseData } from '../transform'

jest.mock('../transform', () => ({
  transformResponseData: jest.fn()
}))

describe('handleResponse', () => {
  it('should parse successful responses', () => {
    const response = {
      ok: true,
      json: jest.fn()
    }

    response.json.mockImplementationOnce(() => Promise.resolve('parsed'))
    transformResponseData.mockImplementationOnce(response => Promise.resolve(response))

    return handleResponse(response)
      .then(actual => {
        expect(actual).toEqual('parsed')
      })
  })

  it('should transform successful responses', () => {
    const response = {
      ok: true,
      json: jest.fn()
    }

    response.json.mockImplementationOnce(() => Promise.resolve())
    transformResponseData.mockImplementationOnce(() => Promise.resolve('transformed'))

    return handleResponse(response)
      .then(actual => {
        expect(actual).toEqual('transformed')
      })
  })

  it('should parse responses in the 400 - 499 range', () => {
    const response = {
      status: 422,
      json: jest.fn()
    }

    response.json.mockImplementationOnce(() => Promise.resolve('parsed'))
    transformResponseData.mockImplementationOnce(response => Promise.resolve(response))

    return handleResponse(response)
      .catch(error => {
        expect(error.data).toEqual('parsed')
      })
  })

  it('should transform responses in the 400 - 499 range', () => {
    const response = {
      status: 422,
      json: jest.fn()
    }

    response.json.mockImplementationOnce(() => Promise.resolve())
    transformResponseData.mockImplementationOnce(() => Promise.resolve('transformed'))

    return handleResponse(response)
      .catch(error => {
        expect(error.data).toEqual('transformed')
      })
  })

  it('should reject responses in the 400 - 499 range with a client error', () => {
    const response = {
      status: 422,
      json: jest.fn()
    }

    response.json.mockImplementationOnce(() => Promise.resolve())
    transformResponseData.mockImplementationOnce(() => Promise.resolve())

    return handleResponse(response)
      .catch(error => {
        expect(error.name).toEqual('ClientError')
      })
  })

  it('should reject responses not in the 400 - 499 range with a server error', () => {
    const response = {
      status: 500,
      statusText: 'Internal Server Error'
    }

    return handleResponse(response)
      .catch(error => {
        expect(error.name).toEqual('ServerError')
      })
  })
})
