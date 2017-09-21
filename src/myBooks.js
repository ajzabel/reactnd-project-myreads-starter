import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Shelf from './shelf'



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
        <Shelf bookData={this.props.bookState.bookData} shelfName={'currentlyReading'} onChangeShelfMyBooks={this.props.onChangeShelfMyBooks} />
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <Shelf bookData={this.props.bookState.bookData} shelfName={'wantToRead'} onChangeShelfMyBooks={this.props.onChangeShelfMyBooks} />
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <Shelf bookData={this.props.bookState.bookData} shelfName={'read'} onChangeShelfMyBooks={this.props.onChangeShelfMyBooks} />
      </div>

      <div className="open-search">
        <Link to="/search" className="open-search">Search</Link>
      </div>
    </div> ) : (<div><p>Loading...</p></div>)}
  </div>
)
}

}

export default MyBooks
