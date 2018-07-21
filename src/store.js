import { combineReducers } from 'redux';
import { BlogPostListReducer } from './scenes/Blog/components/BlogPostList/reducer';
import { BlogPostReducer } from './scenes/BlogPost/reducer';

const rootReducer = combineReducers({
  ...BlogPostListReducer,
  ...BlogPostReducer
});

export default rootReducer;
