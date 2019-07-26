const db = require('../database/dbConfig');
const Usermodel = require('./userModel.js');

beforeEach(async () => {
  await db('users').truncate();
});

describe('Users model', () => {
  describe('[POST] /register', () => {
    it('should add a user to the database', async() => {
      await Usermodel.addUser({username: 'michael', password: 'infiltrate'});
      await Usermodel.addUser({username: 'alomo', password: 'infiltrate'});
      await Usermodel.addUser({username: 'spade', password: 'infiltrate'});
      await Usermodel.addUser({username: 'ilupeju', password: 'infiltrate'})
      const newUser = await db('users');
      expect(newUser).toHaveLength(4);
    });
  });

  describe('[POST] /login', () => {
    it('should login a user', async() => {
      await Usermodel.addUser({
        username: 'michael',
        password: 'infiltrate',
      });
      await Usermodel.addUser({
        username: 'sola',
        password: 'infiltrate',
      });
      const user = await Usermodel.findById(1);
      expect(user.id).toEqual(1);
    });
    it('should login a user by email', async () => {
      const user = {
        username: 'sola',
        password: 'infiltrate',
      };
      await Usermodel.findByUsername(user.username);
    });
  });

  describe('[GET] /users', () => {
    it('should get all users from the database', async () => {
      await Usermodel.addUser({ username: 'richard', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'oguns', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'yusuf', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'mickey', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'frodo', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'shwarz', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'macthemark', password: 'infiltrate' });
      await Usermodel.addUser({ username: 'einstein', password: 'infiltrate' });
      const allUsers = await db('users');
      expect(allUsers).toHaveLength(8);
    });
  });
});
