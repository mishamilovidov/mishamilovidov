import React from 'react';
import BlogPostListItem from './components/BlogPostListItem';

const BlogPostList = (props) => {
  const blogPostItems = props.blogPosts.map((blogPost) => {
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

export default BlogPostList;
