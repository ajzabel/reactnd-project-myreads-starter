import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './Search'
import MyBooks from './myBooks'

class BooksApp extends React.Component {
  state = {
    bookData: []
  }




  componentDidMount() {
      BooksAPI.getAll().then((data) =>
      {
        this.setState({ bookData: data })
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf).then(()=> {
      book.shelf = shelf
      this.setState(state => ({bookData: state.bookData.filter(b=> b.id!==book.id).concat([ book ])}))
    })
  }


  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search bookState={this.state} onChangeShelfSearch={this.changeShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <MyBooks bookState={this.state} onChangeShelfMyBooks={this.changeShelf} />
    )}/>
      </div>
    )
  }
}

export default BooksApp
