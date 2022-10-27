const Option = require("../models/Option");

const optionController = {};


// Show list of options as JSON
optionController.listJson = (req, res) => {
  Option.find({}).exec((err, options) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      console.log(options);
      res.send(200, { options: options });
    }
  });
};



// Show user by id
optionController.byId = (req, res) => {
  Option.findOne({ _id: req.params.id }).exec((err, option) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { option: option });
    }
  });
};


// Save new option
optionController.save = (req, res) => {
    const option = new Option(req.body);

  option.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an option.");

     
      res.send({ id: option._id,  });
    }
  });
};


// Update an user
optionController.update = (req, res) => {
  Option.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, id: req.body.id, char: req.body.char, creationDate: req.body.creationDate, question: req.body.question,  } }, { new: true }, function (err, option) {
    if (err) {
      console.log(err);
      res.render(400, { option: req.body });
    }
    res.send({ id: option._id });
  });
};

// Delete an option
optionController.delete = (req, res) => {
  Option.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.send(400, { msg: "Option deleted" })
    }
    else {
      console.log("Option deleted!");
      res.send({ "msg": "Option deleted successfully" });
    }
  });
};

// Delete an question
optionController.question = (req, res) => {
  Option.findOne({ _id: req.params.id })
    .populate('question') // only works if we pushed refs to question.mentor
    .exec((err, option) => {
      if (err) {
        console.log(err);
        res.status(400).send({ err: err });
      } else {
        res.send(option)
      }
      console.log(option);
    });
};

module.exports = optionController;
