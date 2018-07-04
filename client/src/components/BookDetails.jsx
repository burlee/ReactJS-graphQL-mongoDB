import { graphql } from 'react-apollo';
import React, { Component } from 'react'
import { getBook } from '../queries/queries'

class BookDetails extends Component {

    displayBookDetails() {
        const { book } = this.props.data;

        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>Gatunek: {book.genre}</p>
                </div>
            )
        }

    }

    render() {
        console.log(this.props)

        return (
            <div id="book-details">
                <p>{this.displayBookDetails()}</p>
            </div>
        )
    }
}


export default graphql(getBook, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);