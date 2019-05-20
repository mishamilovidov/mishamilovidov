import React, { Component } from 'react';
import BlogPostList from './components/BlogPostList';
import DocumentMeta from 'react-document-meta';

class Blog extends Component {
  render() {
    return (
			<DocumentMeta {...{
					title: 'Blog | Misha Milovidov',
					description: `Misha Milovidov's Blog`,
					canonical: window.location.href,
					meta: { charset: 'utf-8', name: { 
						keywords: `Misha Milovidov, Misha Milovidov's Blog` 
					} }
				}}
			>
				<div className="Blog">
					<BlogPostList />
				</div>
			</DocumentMeta>
    );
  }
}

export default Blog;
