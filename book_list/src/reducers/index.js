import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooks from './reducer_active_book';

const rootReducer = combineReducers({
  booksList: BooksReducer,
  activeBooks: ActiveBooks
});

export default rootReducer;
