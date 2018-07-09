import React, { Component } from 'react';
import BlogPostList from './components/BlogPostList';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <BlogPostList />
      </div>
    );
  }
}

export default Blog;
