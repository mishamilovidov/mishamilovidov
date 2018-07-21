import React from 'react';
import { Route } from 'react-router-dom';

import Blog from './Blog';
import BlogPost from './BlogPost';

const Routes = () => (
  <div>
    <Route exact path="/blog/:slug" component={BlogPost} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/" component={Blog} />
  </div>
);

export default Routes;
