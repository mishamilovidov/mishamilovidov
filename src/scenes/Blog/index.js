import React, { Component } from 'react';
import axios from 'axios';
import BlogPostList from '../../components/BlogPostList';

const API_TOKEN = 'R8T6E)Ql%V%a8@L8%cQnDo0yJa^wk^&5)3xUmbJSrsDt4(3&A0Mfpj2LM*iqENlk';
const SITE_ID = '148566154';

class Blog extends Component {
  constructor(props) {
    super(props);

    let self = this;

    this.state = {
      blogPosts: [],
    };

    // get blog posts
    axios({
        url: '/posts',
        method: 'get',
        baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites/' + SITE_ID,
        headers: {
          'Authorization': 'BEARER ' + API_TOKEN
        },
      })
      .then((response) => {
        self.setState({
          blogPosts: response.data.posts
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      <div className="Blog">
        <BlogPostList blogPosts={this.state.blogPosts} />
      </div>
    );
  }
}

export default Blog;
