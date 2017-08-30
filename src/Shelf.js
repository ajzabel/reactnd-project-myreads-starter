import React from 'react';
import Book from './Book'


class Shelf extends React.Component {

  render() {

    console.log(this.props)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book title={this.props.bookData.title}
                author={this.props.bookData.authors}
                imageSrc={this.props.bookData.imageLinks} />
        </ol>
      </div>

      </div>
    )
  }
}



// <div className="bookshelf">
//   <h2 className="bookshelf-title">Want to Read</h2>
//   <div className="bookshelf-books">
//     <ol className="books-grid">
//       <Book title='Les Miserables' author='Hugo Weaving' imageSrc={this.state.bookData.imageLinks} />
//       <Book title='The Count of Monte Cristo' author='Alexander Dumas' imageSrc={this.state.bookData.imageLinks} />
//     </ol>
//   </div>
// </div>


// <div className="bookshelf">
//   <h2 className="bookshelf-title">Read</h2>
//   <div className="bookshelf-books">
//     <ol className="books-grid">
//       <Book title='Lord of the Rings' author='J.R.R Tolkein'imageSrc={this.state.bookData.imageLinks}/>
//       <Book title='Oh The Places You Will Go' author='Dr. Seuss'imageSrc={this.state.bookData.imageLinks}/>
//       <Book title='The Bible' author='God' imageSrc={this.state.bookData.imageLinks}/>
//     </ol>
//   </div>
// </div>




export default Shelf
