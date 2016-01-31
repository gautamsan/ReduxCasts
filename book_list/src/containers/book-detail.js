import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    let idx = 0;
    if (!this.props.activeBooks) {
      return <div>Select a book to get started.</div>;
    }

    if(this.props.activeBooks.length > 1) {
      console.log(this.props.activeBooks.length)
      let activeBooks = this.props.activeBooks.map((activeBook) => {
        return (
          <ul key={idx++} className="list-group">
            <li className="list-group-item">
              <h3>Details for:</h3>
              <div>Title: {activeBook.title}</div>
              <div>Pages: {activeBook.pages}</div>
            </li>
          </ul>
        );
      });

      return <div>{activeBooks}</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.activeBooks.title}</div>
        <div>Pages: {this.props.activeBooks.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBooks: state.activeBooks
  };
}

export default connect(mapStateToProps)(BookDetail);
