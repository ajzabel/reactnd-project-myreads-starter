import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Book from './Book'

class BooksApp extends React.Component {
  state = {
    bookData: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  }

//"sJf1vQAACAAJ"


  componentDidMount() {
    BooksAPI.getAll().then((data) =>
      {
        console.log(data)
        this.setState({ bookData: data })
      })

  }

  changeShelf = (book, shelf) => {
    console.log(book)
    console.log(shelf)
    BooksAPI.update(book, shelf).then((book) =>
    {
      this.setState((prevState, book) => prevState.map(book => ))
    })
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div>
          {JSON.stringify(this.state.bookData).length > 0 ? (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                      {this.state.bookData.filter(bookData => bookData.shelf === "currentlyReading").map(bookData => <Book onChangeShelf={this.changeShelf} key={bookData.id} bookData={bookData} />)}
                  </ol>
                  </div>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.bookData.filter(bookData => bookData.shelf === "wantToRead").map(bookData => <Book onChangeShelf={this.changeShelf} key={bookData.id} bookData={bookData} />)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.bookData.filter(bookData => bookData.shelf === "read").map(bookData => <Book onChangeShelf={this.changeShelf} key={bookData.id} bookData={bookData} />)}
                </ol>
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        ) : (<div><p>Loading...</p></div>)}
      </div>
    )
      }
      </div>
    )
  }
}

export default BooksApp
