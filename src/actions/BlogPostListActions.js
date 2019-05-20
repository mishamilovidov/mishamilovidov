import axios from 'axios';
import { API_TOKEN, ROOT_URL } from '../services/wordpress';
import {
	FETCH_BLOG_POSTS_LOADING,
	FETCH_BLOG_POSTS_SUCCESS,
	FETCH_BLOG_POSTS_FAILURE
} from './types';

export function getAllBlogPosts() {
  const url = `${ROOT_URL}/posts`;

  return (dispatch) => {
    dispatch(blogPostsIsLoading(true));

    axios({
      url: url,
      method: 'get',
      headers: {
        'Authorization': 'BEARER ' + API_TOKEN
      },
    }).then((response) => {
      dispatch(blogPostsIsLoading(false));
      dispatch(blogPostsFetchSuccess(response.data.posts));
    }).catch(() => {
      dispatch(blogPostsFetchError(true));
    })
  };

}

export const blogPostsIsLoading = (bool) => ({
  type: FETCH_BLOG_POSTS_LOADING,
  isLoading: bool
});

export const blogPostsFetchSuccess = (posts) => ({
  type: FETCH_BLOG_POSTS_SUCCESS,
  posts
});

export const blogPostsFetchError = (bool) => ({
  type: FETCH_BLOG_POSTS_FAILURE,
  hasErrored: bool
});
