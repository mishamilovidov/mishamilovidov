import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogPost } from './actions';
import Loader from 'react-loader-spinner'
import moment from 'moment';
import wordCount from 'html-word-count';

import './styles.css';

class BlogPost extends Component {
  componentDidMount() {
    const { slug } = this.props.match.params;

    this.props.getBlogPost(slug);
  }

  render() {
    const { hasErrored, isLoading, blogPost } = this.props;
    const blogFeatureImage = blogPost.featured_image;
    const blogTitle = blogPost.title;
    const blogContent = blogPost.content;
    const blogDate = moment(blogPost.date).locale(navigator.language).format('LL');
    const readTime = Math.round(wordCount(blogPost.content) / 265);

    if (hasErrored) {
      return (
        <div className="BlogPost">
          <p className="error">An error occurred while fetching this blog post; see browser console for details.</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="BlogPost">
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

    return (
      <div className="BlogPost">
        <div className="back">
          <Link to="/blog">
            <span role="img" aria-label="Arrow Left Emoji">⬅️</span> Blog Posts
          </Link>
        </div>
        <div className="tile">
          <img
            src={blogFeatureImage}
            alt={blogTitle}
            onError={(e)=>{
              e.target.src="//dummyimage.com/400x400/e5e5e5/e5e5e5.png"
            }}
          />
          <h1 className="title" dangerouslySetInnerHTML={{__html: blogTitle}}></h1>
          <div className="metadata">
            <div className="date">
              <span>{blogDate}</span>
            </div>
            <div className="read-time">
              <span>{readTime} Minutes</span>
            </div>
          </div>
          <div className="excerpt" dangerouslySetInnerHTML={{__html: blogContent}} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    slug: ownProps.match.params.slug,
    blogPost: state.blogPost,
    hasErrored: state.blogPostFetchError,
    isLoading: state.blogPostIsLoading
  };
}

export default connect(mapStateToProps, { getBlogPost })(BlogPost);
