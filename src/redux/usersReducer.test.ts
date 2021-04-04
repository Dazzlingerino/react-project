import usersReducer, { actions, InitialStateType } from './usersReducer'

let state: InitialStateType
beforeEach(
  () =>
    (state = {
      users: [
        {
          id: 0,
          name: 'Andr 0',
          status: 'status 0',
          photos: { small: undefined, large: undefined },
          followed: false,

        },
        {
          id: 1,
          name: 'Andr 1',
          status: 'status 1',
          photos: { small: undefined, large: undefined },
          followed: false,
        },
        {
          id: 2,
          name: 'Andr 2',
          status: 'status 2',
          photos: { small: undefined, large: undefined },
          followed: true,
        },
        {
          id: 3,
          name: 'Andr 3',
          status: 'status 3',
          photos: { small: undefined, large: undefined },
          followed: true,
        },
      ],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: [],
    })
)
test('follow success', () => {
  const newState = usersReducer(state, actions.followSuccess(1))

  expect(newState.users[0].followed).toBeFalsy()

})
test('unfollow success', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(2))

  expect(newState.users[2].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeFalsy()

})

