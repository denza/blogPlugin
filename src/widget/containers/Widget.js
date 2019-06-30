import React from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';

import store from '../store';

import Posts from '../components/Posts';
import PostForm from '../components/PostForm';




const Widget = () => (
  <Provider store={store}>
    <div>
      <PostForm />
      <hr />
      <Posts />
    </div>
  </Provider>
);

export default hot(Widget);
