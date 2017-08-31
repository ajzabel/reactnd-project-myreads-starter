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
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option onClick={()=> this.props.onChangeShelf(this.props.bookData, "currentlyReading")} value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{this.props.bookData.title}</div>
                <div className="book-authors">{this.props.bookData.authors}</div>
              </div>
            </li>


    )
  }
}


export default Book