import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

// eslint-disable-next-line consistent-return
export const signup = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;
  const { fullname } = req.body;

  if (!email || !password || !username || !fullname) {
    return res.status(422).send('You must provide an email, username and password');
  }

  // Mongo query to find if a user already exists with this email.
  // if user exists then return an error. If not, use the User model to create a new user.
  // Save the new User object and then return a token same as you did in in signin
  User.findOne({ email })
    .then((result) => {
      if (result) {
        res.json({ message: 'a user is already using this email' });
      } else {
        // eslint-disable-next-line new-cap
        const user = new User();
        user.email = email;
        user.password = password;
        user.username = username;
        user.fullname = fullname;

        user.save()
          .then(() => {
            res.json({ token: tokenForUser(user) });
          })
          .catch((error) => {
            // console.log('error saving this user');
            console.log(error);
            res.status(500).send(error);
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'something went wrong' });
    });
};
