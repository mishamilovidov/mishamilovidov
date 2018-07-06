import React from 'react';
import moment from 'moment';
import './styles.css';

const BlogPostListItem = ({blogPost}) => {
  const blogTitle = blogPost.title;
  const blogExcerpt = blogPost.excerpt;
  const blogDate = moment(blogPost.date).locale(navigator.language).format('LL');

  return (
    <div className="BlogPostListItem">
      <h1 className="title">{blogTitle}</h1>
      <div className="metadata">
        <span>{blogDate}</span>
      </div>
      <div className="excerpt" dangerouslySetInnerHTML={{__html: blogExcerpt}} />
    </div>
  );
};

export default BlogPostListItem;
