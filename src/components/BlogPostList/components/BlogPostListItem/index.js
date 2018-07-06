import React from 'react';
import moment from 'moment';
import wordCount from 'html-word-count';
import './styles.css';

const BlogPostListItem = ({blogPost}) => {
  const blogTitle = blogPost.title;
  const blogExcerpt = blogPost.excerpt;
  const blogDate = moment(blogPost.date).locale(navigator.language).format('LL');
  const readTime = Math.round(wordCount(blogPost.content) / 265);

  return (
    <div className="BlogPostListItem">
      <h1 className="title">{blogTitle}</h1>
      <div className="metadata">
        <div className="date">
          <span>{blogDate}</span>
        </div>
        <div className="read-time">
          <span>{readTime} Minutes</span>
        </div>
      </div>
      <div className="excerpt" dangerouslySetInnerHTML={{__html: blogExcerpt}} />
    </div>
  );
};

export default BlogPostListItem;
