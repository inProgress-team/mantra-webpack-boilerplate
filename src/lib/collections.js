import { Mongo } from 'meteor/mongo';

import User from './User';

export default {
  User,
  Posts: new Mongo.Collection('posts'),
  Comments: new Mongo.Collection('comments')
}
