import React from 'react';
import './App.css'

class Book extends React.Component {

  render() {
    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookData.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={this.props.bookData.shelf} onChange={((event) => (this.props.onChangeShelf(this.props.bookData, event.target.value)))}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{this.props.bookData.title}</div>
                <div className="book-authors">{this.props.bookData.authors.length < 2 ? (this.props.bookData.authors) : (this.props.bookData.authors.map((currentValue, index, author) => (index < (author.length - 1) ?
                                                                                                                                                        (currentValue + ", ") :
                                                                                                                                                        (currentValue))))}</div>
              </div>
            </li>


    )
  }
}


export default Book
