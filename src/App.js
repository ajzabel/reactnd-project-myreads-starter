import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link, Route } from 'react-router-dom'
import Search from './Search'
import MyBooks from './myBooks'

class BooksApp extends React.Component {
  state = {
    bookData: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    query: '',
    showBooks: []
  }




  componentDidMount() {
      BooksAPI.getAll().then((data) =>
      {
        //console.log(data)
        this.setState({ bookData: data })
      })
  }

  changeShelf = (book, shelf) => {
    //console.log(book)
    //console.log(shelf)

    BooksAPI.update(book,shelf).then(()=> {
      book.shelf = shelf
      this.setState(state => ({bookData: state.bookData.filter(b=> b.id!==book.id).concat([ book ])}))
    })

  }

  componentDidUpdate = (prevProps, prevState ) => {
    console.log(prevState.query)
    console.log(this.state.query)
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
        this.setState({showBooks: [], query: ''})
      }
    }
  }


  updateQuery = (query) => {
    //console.log(this.state.showBooks)
    //console.log(this.state.query)
    this.setState({ query: query.trim() })
}


  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search bookState={this.state} onUpdateQuery={this.updateQuery} onChangeShelfSearch={this.changeShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <MyBooks bookState={this.state} onUpdateQuery={this.updateQuery} onChangeShelfMyBooks={this.changeShelf} />
    )}/>
      </div>
    )
  }
}

export default BooksApp
