import { Meteor } from 'meteor/meteor';
import { Astro, Class } from 'meteor/jagi:astronomy';

const UserProfile = Class.create({
  name: 'UserProfile',
  fields: {
    firstName: String,
    lastName: String
  }
});

const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    createdAt: Date,
    emails: {
      type: [Object],
      default: function() {
        return [];
      }
    },
    profile: {
      type: UserProfile,
      default: function() {
        return {};
      }
    }
  }
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: Object
    }
  });
}

export default User;