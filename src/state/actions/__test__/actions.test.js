import { saveComment } from 'state/actions'
import { SAVE_COMMENT } from 'state/actions/types'

describe('saveComent', () => {
  it('has the correct type', () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment('New comment')

    expect(action.payload).toEqual('New comment')
  })
})

describe('fetchComments', () => {
  it('has the correct type', () => {})

  it('has the correct payload', () => {})
})
