import { createStore, compose } from 'redux';

// Import the root reducer
import rootReducer from './reducers/index';

// Import data
import comments from './data/comments';
import posts from './data/posts';

// Default State
const defaultState = {
  posts: posts,
  comments: comments
};

// Create store
const store = createStore(rootReducer, defaultState);

export default store;