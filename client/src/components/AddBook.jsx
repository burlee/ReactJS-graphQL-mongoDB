import './BookList.css';
import { graphql, compose } from 'react-apollo'
import React, { Component } from 'react';
import {getAuthors, addBookMutation, getBooks } from '../queries/queries'


class AddBook extends Component {
    state = {
        name: '',
        genre: '',
        authorId:''
    }

    
    displayAuthors(){
        var data = this.props.getAuthors;
        if(data.loading){
            return(<option disabled>---</option>)
        }else{
            return data.authors.map( author => {
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.addBookMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                id: this.state.authorId
            },
            refetchQueries:[{query: getBooks}]
        })
    }
    render() {
      console.log(this.props.getAuthors.authors)
      return (
        <form id="add-book" onSubmit={this.submitForm}>

            <div className="field">
                <label>Tytuł książki:</label>
                <input type="text" onChange={(e)=> this.setState({name: e.target.value})}/>
            </div>

            <div className="field">
                <label>Gatunek:</label>
                <input type="text" onChange={(e)=> this.setState({genre: e.target.value})}/>
            </div>

            <div className="field">
                <label>Autor:</label>
                <select onChange={(e)=> this.setState({authorId: e.target.value})} >
                    <option>Wybierz autora</option>
                    {this.displayAuthors()}
                </select>
            </div>

            <button>+</button>

        </form>
      )
    }
  }

  export default compose(
      graphql(getAuthors, {name: "getAuthors"}),
      graphql(addBookMutation, {name: "addBookMutation"})
  )(AddBook);