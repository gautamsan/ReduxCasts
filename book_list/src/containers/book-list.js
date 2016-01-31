import React, { Component } from 'react';
import { connect } from 'react-redux';
import currentViewing from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.booksList.map((book) => {
      return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.selectAllBooks(this.props.booksList)}>Show All Books</button>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    booksList: state.booksList
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: currentViewing.selectBook, selectAllBooks: currentViewing.selectAllBooks }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
