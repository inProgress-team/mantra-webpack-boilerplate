import React from 'react';
import {mount} from 'react-mounter';

import {FlowRouter} from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/main_layout.jsx';
import PostList from 'client/modules/core/containers/postlist';
import Post from 'client/modules/core/containers/post';
import NewPost from 'client/modules/core/containers/newpost';

import { AuthCheck } from 'client/configs/components';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const AuthCheckCtx = injectDeps(AuthCheck);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(AuthCheckCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
