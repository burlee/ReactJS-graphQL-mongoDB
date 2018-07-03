import './BookList.css';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost';
import React, { Component } from 'react';

const getAuthors = gql`
{
    authors{
      name,age, id
    }
  }
`

class Authors extends Component {
    displayAuthors(){
        var data = this.props.data;
        if(data.loading){
            return(<option disabled>Ładowanie autorow </option>)
        }else{
            return data.authors.map( autor => {
                return(<option key={autor.id}>{autor.name}</option>)
            })
        }
    }

    render() {
      console.log(this.props)
      return (
        <form id="add-book">

            <div className="field">
                <label>Tytuł książki:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Gatunek:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Autor:</label>
                <select>
                    <option>Wybierz autora</option>
                    {this.displayAuthors()}
                </select>
            </div>


        </form>
      )
    }
  }

  export default graphql(getAuthors)(Authors);