import React from 'react'
import './App.css'
import Book from './Book'
import { Link } from 'react-router-dom'



class MyBooks extends React.Component {
render() {
  return (


  <div>
  {JSON.stringify(this.props.bookState.bookData).length > 0 ? (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.bookState.bookData.filter(bookData => bookData.shelf === "currentlyReading").map(bookData => <Book onChangeShelf={this.props.onChangeShelfMyBooks} key={bookData.id} bookData={bookData} />)}
          </ol>
          </div>
      </div>
    </div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.bookState.bookData.filter(bookData => bookData.shelf === "wantToRead").map(bookData => <Book onChangeShelf={this.props.onChangeShelfMyBooks} key={bookData.id} bookData={bookData} />)}
        </ol>
      </div>
    </div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.bookState.bookData.filter(bookData => bookData.shelf === "read").map(bookData => <Book onChangeShelf={this.props.onChangeShelfMyBooks} key={bookData.id} bookData={bookData} />)}
        </ol>
      </div>
    </div>

    <div className="open-search">
      <Link to="/search" className="open-search">Search</Link>
    </div>
  </div>
) : (<div><p>Loading...</p></div>)}
</div>
)
}

}

export default MyBooks
