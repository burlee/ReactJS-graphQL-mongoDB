import {gql} from 'apollo-boost'

const getBooks = gql`
{
  books{
    name
    id
    genre
  }
}
`

const getAuthors = gql`
{
    authors{
      name
      age
      id
    }
  }
`
const addBookMutation = gql`
  mutation{
      addBook(name:"", genre:"", authorId:""){
        name
        id
      }
  }
`

export {getBooks, getAuthors, addBookMutation};