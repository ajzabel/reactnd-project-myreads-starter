import React from 'react';
import './App.css'
import Book from './Book'


class Shelf extends React.Component {

  render() {
    return (

          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.bookData.filter(bookData => bookData.shelf === this.props.shelfName).map(bookData => <Book onChangeShelf={this.props.onChangeShelfMyBooks} key={bookData.id} bookData={bookData} />)}
            </ol>
          </div>

  )}
}

export default Shelf
