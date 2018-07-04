import { graphql } from 'react-apollo';
import React, { Component } from 'react'
import { getBook } from '../queries/queries'

 class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>{this.props.bookId}</p>
      </div>
    )
  }
}


export default graphql(getBook)(BookDetails);