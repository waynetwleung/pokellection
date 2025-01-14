const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

userController.createUser = (req, res, next) => {
  const { username } = req.body;
  let { password } = req.body;
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      User.create({ username: username, password: hash })
        .then((data) => {
          res.locals.newUser = data;
          return next();
        })
        .catch((err) => {
          const errObj = {
            log: 'Error occurred in user.create',
            status: 400,
            message: 'Error occurred',
          };
          return next(errObj);
        });
    });
  });
};

userController.getUser = (req, res, next) => {
  // console.log("before user find one")
  // console.log("req body: ", req.body)
  User.findOne({ username: req.body.username }) /*, (err, result) => {*/
    .then(async (results) => {
      // console.log(results)
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        results.password
      );
      console.log('PASSWORD MATCH: ', passwordMatch);
      res.locals.truthy = passwordMatch;
      res.locals.userData = results.collection;
      return next();
    })
    .catch((err) => {
      console.log('THIS IS THE ERROR: ', err);
      const errObj = {
        log: 'error occurred in userController.getUser',
        status: 400,
        message: { err: 'chill' },
      };
      return next(errObj);
    });
};

userController.saveUser = (req, res, next) => {
  User.findOneAndUpdate({ username: req.body.username })
  .then((result) => {
    res.locals.message = 'Collection saved!'
    return next();
  })
  .catch((err) => {
    const errObj = {
      log: 'error occurred in userController.saveUser'
    }
  })
}

module.exports = userController;
