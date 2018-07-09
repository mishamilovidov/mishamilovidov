import { combineReducers } from 'redux';
import { blogPosts, blogPostsFetchError, blogPostsIsLoading } from './services/wordpress/posts/reducer';

const rootReducer = combineReducers({
  blogPosts,
  blogPostsFetchError,
  blogPostsIsLoading
});

export default rootReducer;
