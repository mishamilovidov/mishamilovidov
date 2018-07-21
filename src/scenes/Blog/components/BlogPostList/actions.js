import axios from 'axios';
import { API_TOKEN, ROOT_URL } from '../../../../services/wordpress';

export const FETCH_BLOG_POSTS_LOADING = 'FETCH_BLOG_POSTS_LOADING';
export const FETCH_BLOG_POSTS_SUCCESS = 'FETCH_BLOG_POSTS_SUCCESS';
export const FETCH_BLOG_POSTS_FAILURE = 'FETCH_BLOG_POSTS_FAILURE';

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
