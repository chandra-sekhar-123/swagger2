const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userController = {};

// Save new user
userController.login = (req, res) => {
 console.log(req.body);
  User.findOne({ email: req.body.email },  (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    
    var token = jwt.sign({ id: user._id, name: user.name, email: user.email }, "abcdefgh", {
      expiresIn: 86400 // expires in 24 hours
    });
    console.log({ auth: true, id: user._id, token: token });
    res.status(200).send({ auth: true, user: user, token: token });
  });

};


// Save new user
userController.signup = (req, res) => {

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashedPassword;
  
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an user.");

      
      res.send({ id: user._id, });
    }
  });
};


// Show list of users as JSON
userController.listJson = (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      console.log(users);
      res.send(200, { users: users });
    }
  });
};



// Show user by id
userController.byId = (req, res) => {
  User.findOne({ _id: req.params.id }).exec((err, user) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { user: user });
    }
  });
};


// Save new user
userController.save = (req, res) => {

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashedPassword;

  const user = new User(req.body);

  user.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an user.");

      // create a token
      const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, "abcdefgh", {
        expiresIn: 86400 // expires in 24 hours
      });
      res.send({ id: user._id, token: token });
    }
  });
};


// Update an user
userController.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, category: req.body.category, gender: req.body.gender, phone: req.body.phone, email: req.body.email, dob: req.body.dob, course: req.body.course, jobStatus: req.body.jobStatus, mentor: req.body.mentor, roles: req.body.roles } }, { new: true }, function (err, user) {
    if (err) {
      console.log(err);
      res.render(400, { user: req.body });
    }
    res.send({ "msg":"updated sucessfully"});
  });
};

// Delete an user
userController.delete = (req, res) => {
  User.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.send(400, { msg: "User deleted" })
    }
    else {
      console.log("User deleted!");
      res.send({ "msg": "User deleted successfully" });
    }
  });
};

// Delete an user
userController.userMentor = (req, res) => {
  User.findOne({ _id: req.params.id })
    .populate('mentor') // only works if we pushed refs to user.mentor
    .exec((err, user) => {
      if (err) {
        console.log(err);
        res.status(400).send({ err: err });
      } else {
        res.send(user)
      }
      console.log(user);
    });
};

module.exports = userController;
