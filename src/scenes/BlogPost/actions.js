import axios from 'axios';
import { API_TOKEN, ROOT_URL } from '../../services/wordpress';

export const FETCH_BLOG_POST_LOADING = 'FETCH_BLOG_POST_LOADING';
export const FETCH_BLOG_POST_SUCCESS = 'FETCH_BLOG_POST_SUCCESS';
export const FETCH_BLOG_POST_FAILURE = 'FETCH_BLOG_POST_FAILURE';

export function getBlogPost(slug) {
  const url = `${ROOT_URL}/posts/slug:${slug}`;

  return (dispatch) => {
    dispatch(blogPostIsLoading(true));

    axios({
      url: url,
      method: 'get',
      headers: {
        'Authorization': 'BEARER ' + API_TOKEN
      },
    }).then((response) => {
      dispatch(blogPostIsLoading(false));
      dispatch(blogPostFetchSuccess(response.data));
    }).catch(() => {
      dispatch(blogPostFetchError(true));
    })
  };

}

export const blogPostIsLoading = (bool) => ({
  type: FETCH_BLOG_POST_LOADING,
  isLoading: bool
});

export const blogPostFetchSuccess = (post) => ({
  type: FETCH_BLOG_POST_SUCCESS,
  post
});

export const blogPostFetchError = (bool) => ({
  type: FETCH_BLOG_POST_FAILURE,
  hasErrored: bool
});
