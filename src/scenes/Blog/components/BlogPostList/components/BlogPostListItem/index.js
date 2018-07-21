import React from 'react';
import moment from 'moment';
import wordCount from 'html-word-count';
import './styles.css';

const BlogPostListItem = ({blogPost}) => {
  const blogFeatureImage = blogPost.featured_image;
  const blogTitle = blogPost.title.toString();
  const blogExcerpt = blogPost.excerpt;
  const blogDate = moment(blogPost.date).locale(navigator.language).format('LL');
  const readTime = Math.round(wordCount(blogPost.content) / 265);

  return (
    <div className="BlogPostListItem">
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
        <div className="excerpt" dangerouslySetInnerHTML={{__html: blogExcerpt}} />
      </div>
    </div>
  );
};

export default BlogPostListItem;
