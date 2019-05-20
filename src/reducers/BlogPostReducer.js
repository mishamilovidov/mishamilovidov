import {
  FETCH_BLOG_POST_LOADING,
  FETCH_BLOG_POST_SUCCESS,
  FETCH_BLOG_POST_FAILURE
} from '../actions/types';

export function blogPostIsLoading(state = false, action) {
    switch (action.type) {
        case FETCH_BLOG_POST_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function blogPost(state = [], action) {
    switch (action.type) {
        case FETCH_BLOG_POST_SUCCESS:
          return action.post;
        default:
            return state;
    }
}

export function blogPostFetchError(state = false, action) {
    switch (action.type) {
        case FETCH_BLOG_POST_FAILURE:
            return action.hasErrored;
        default:
            return state;
    }
}

export const BlogPostReducer = {
  blogPost,
  blogPostFetchError,
  blogPostIsLoading
};
