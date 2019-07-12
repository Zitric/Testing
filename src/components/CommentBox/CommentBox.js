import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'state/actions'
import RequireAuth from 'components/RequireAuth/RequireAuth'

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = (event) => this.setState({ comment: event.target.value })

  handleSubmit = (event) => {
    const { comment } = this.state
    const { saveComment } = this.props

    event.preventDefault()

    saveComment(comment)
    this.setState({ comment: '' })
  }

  render() {
    const { fetchComments } = this.props
    const { comment } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4 className="comment-box__title">Add a comment</h4>
          <textarea className="comment-box__text-area" onChange={this.handleChange} value={comment} />
          <div>
            <button className="comment-box__submit-comment-button" type="submit">
              Submit comment
            </button>
          </div>
        </form>
        <button className="comment-box__fetch-button" type="button" onClick={fetchComments}>
          Fetch Comments
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  actions,
)(RequireAuth(CommentBox))
