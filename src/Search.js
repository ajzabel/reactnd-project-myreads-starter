import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'



class Search extends React.Component {

  state = {
    query: '',
    showBooks: []
  }

  componentDidUpdate = (prevProps, prevState ) => {
    if(this.state.query) {
      if (this.state.query !== prevState.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        BooksAPI.search(this.state.query, 10000).then((data) => {

          this.setState({showBooks: data.filter((book) => match.test(book.title)).sort(sortBy('title'))
          })
        })
      }
    }
    else {
      if(this.state.query !== prevState.query) {
        this.setState(state => ({showBooks: [], query:''}))
      }
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>


          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.showBooks.map(book => <Book onChangeShelf={this.props.onChangeShelfSearch} key={book.id} bookData={book}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
