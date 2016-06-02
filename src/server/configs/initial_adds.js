import { Posts, User } from 'lib/collections';

export default function () {
  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Posts.insert({title, content});
    }
  }

  if(!User.findOne()) {
    const user1Id = Accounts.createUser({
      email: 'theo.mathieu@in-progress.io',
      password: 'aaaa',
      profile: {
        firstName: 'Théo',
        lastName: 'Mathieu'
      }
    });
    const user1 = User.findOne(user1Id);
    Accounts.addEmail(user1Id, user1.emails[0].address, true);
    Roles.addUsersToRoles(user1Id, ['super-admin']);
  }
}
