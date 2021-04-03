import React from 'react'
import profileReducer, { actions } from './profileReducer'
import { ProfileType } from '../types/types'

let state = {
  posts: [
    { id: 1, message: 'Hi! How are you?', likeCount: 30 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: "It's my second post", likeCount: 10 },
    { id: 4, message: "It's my third post", likeCount: 45 },
  ],
  profile: null,
  status: '',
  newPostText: '',
}
it('length of posts should be incremented', () => {
  // 1.test data
  let action = actions.addPost('Hey hey im new text')

  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation
  expect(newState.posts.length).toBe(5)
})

it('message of added post should be correct', () => {
  // 1.test data
  let action = actions.addPost('Hey hey im new text')

  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation
  expect(newState.posts[4].message).toBe('Hey hey im new text')
})

it('after deleting length of messages should be decremented', () => {
  // 1.test data
  let action = actions.deletePost(1)

  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation
  expect(newState.posts.length).toBe(3)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1.test data
  let action = actions.deletePost(100)

  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation
  expect(newState.posts.length).toBe(4)
})
