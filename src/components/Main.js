import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../scenes/Blog';
import BlogPost from '../scenes/BlogPost';

const Main = () => (
  <main>
    <Switch>
			<Route path="/blog/:slug" component={BlogPost} />
			<Route path="/blog" component={Blog} />
			<Route path="/" component={Blog} />
    </Switch>
  </main>
)

export default Main;
