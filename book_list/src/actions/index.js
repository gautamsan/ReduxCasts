/*export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}*/

const currentViewing = {
  selectBook: (book) => {
    return {
      type: 'BOOK_SELECTED',
      payload: book
    }
  },
  selectAllBooks: (allBooks) => {
    return {
      type: 'ALL_BOOKS_SELECTED',
      payload: allBooks
    }
  },

};

export default currentViewing;




