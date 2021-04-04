import { follow, unfollow } from './usersReducer'
import { usersAPI } from '../api/users-api'
import { APIResponseType, ResultCodesEnum } from '../api/api'

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  userAPIMock.follow.mockClear()
  userAPIMock.unfollow.mockClear()
})

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {},
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test('success follow thunk', async () => {
  const thunk = follow(3)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
})
test('success unfollow thunk', async () => {
  const thunk = unfollow(3)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
})
