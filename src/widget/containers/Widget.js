import React from 'react';
import { hot } from 'react-hot-loader/root';

import Posts from '../components/Posts';
import PostForm from '../components/PostForm';

const Widget = () => (
  <div>
    <PostForm />
    <hr />
    <Posts />
  </div>
);

export default hot(Widget);
