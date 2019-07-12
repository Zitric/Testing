import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList/CommentList'
import Root from 'Root'

let component

beforeEach(() => {
  const initialState = {
    comments: ['Comment one', 'Comment two'],
  }

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  )
})

it('creates one LI per comment', () => {
  expect(component.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('Comment one')
  expect(component.render().text()).toContain('Comment two')
})
