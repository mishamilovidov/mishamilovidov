import {
  FETCH_BLOG_POSTS_LOADING,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAILURE
} from './actions';

export function blogPostsIsLoading(state = false, action) {
    switch (action.type) {
        case FETCH_BLOG_POSTS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function blogPosts(state = [], action) {
    switch (action.type) {
        case FETCH_BLOG_POSTS_SUCCESS:
          return action.posts;
        default:
            return state;
    }
}

export function blogPostsFetchError(state = false, action) {
    switch (action.type) {
        case FETCH_BLOG_POSTS_FAILURE:
            return action.hasErrored;
        default:
            return state;
    }
}
