import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBlogPosts } from './actions';
import Loader from 'react-loader-spinner'
import BlogPostListItem from './components/BlogPostListItem';

import './styles.css';

class BlogPostList extends Component {
  componentDidMount() {
    this.props.getAllBlogPosts();
  }

  render () {
    const { hasErrored, isLoading, blogPosts } = this.props;

    if (hasErrored) {
      return (
        <div className="BlogPostList">
          <p className="error">An error occurred while fetching blog posts; see browser console for details.</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="BlogPostList">
          <div className="loading">
            <Loader
               type="Oval"
               color="#333332"
               height="30"
               width="30"
            />
          </div>
        </div>
      );
    }

    const blogPostItems = blogPosts.map((blogPost) => {
      return (
        <BlogPostListItem
          key={blogPost.global_ID}
          blogPost={blogPost}
        />
      );
    });

    return (
      <div className="BlogPostList">
        {blogPostItems}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts,
    hasErrored: state.blogPostsFetchError,
    isLoading: state.blogPostsIsLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllBlogPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList);
