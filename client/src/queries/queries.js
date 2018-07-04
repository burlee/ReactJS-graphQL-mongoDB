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
  mutation($name: String!, $genre: String!, $id: ID!){
      addBook(name:$name, genre:$genre , id: $id){
        name
        id
      }
  }
`

const getBook = gql`
  query($id: String){
      book(id: $id){
          id
          name
          genre
          author{
              id
              name
              age
              books{
                  name
                  id
              }
          }
      }
  }
`

export {getBooks, getAuthors, addBookMutation, getBook};