import React, { Component } from 'react'
import './BookList.css'
import {gql} from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooks = gql`
{
  books{
    name,
    id,
    genre
  }
}
`

class BookList extends Component {
  state = {
    books: []
  }

  booksHandler(){
    const fetchBooks = this.props.data;
    if(fetchBooks.loading === true){
      return <p> loading books... </p>
    }else{
      return fetchBooks.books.map( book => {
        return <li key={book.id}> {book.name} </li>
      }) 
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul id="book-list">
            <li>{this.booksHandler()}</li>
        </ul>
      </div>
    )
  }
}

export default graphql(getBooks)(BookList);
