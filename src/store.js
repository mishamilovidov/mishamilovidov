import { combineReducers } from 'redux';
import { BlogPostListReducer } from './scenes/Blog/components/BlogPostList/reducer';

const rootReducer = combineReducers({
  ...BlogPostListReducer
});

export default rootReducer;
