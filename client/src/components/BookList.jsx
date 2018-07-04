import React, { Component } from 'react'
import './BookList.css'
import { graphql } from 'react-apollo'
import { getBooks } from '../queries/queries'
import BookDetails from './BookDetails';


class BookList extends Component {
  state = {
    bookId: null
  }

  booksHandler(){
    const fetchBooks = this.props.data;
    if(fetchBooks.loading === true){
      return <p> loading books... </p>
    }else{
      return fetchBooks.books.map( book => {
        return <li onClick={() =>this.setState({bookId: book.id})} key={book.id}> {book.name} </li>
      }) 
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul id="book-list">
            <li >{this.booksHandler()}</li>
        </ul>
        <BookDetails bookId={this.state.bookId} />
      </div>
    )
  }
}

export default graphql(getBooks)(BookList);