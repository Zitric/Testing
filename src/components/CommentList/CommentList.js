import React from 'react'
import { connect } from 'react-redux'

class CommentList extends React.Component {
  renderComments() {
    const { comments } = this.props
    return comments.map((comment) => {
      return <li key={comment.id}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)
