const Question = require("../models/Question");

const questionController = {};


// Show list of questions as JSON
questionController.listJson = (req, res) => {
  Question.find({}).exec((err, questions) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      console.log(questions);
      res.send(200, { questions: questions });
    }
  });
};



// Show question by id
questionController.byId = (req, res) => {
  Question.findOne({ _id: req.params.id }).exec((err, question) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { question: question });
    }
  });
};


// Save new question
questionController.save = (req, res) => {
  const q = new Question(req.body);

  q.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an question.");

     
      res.send({ id: q._id,  });
    }
  });
};


// Update an question
questionController.update = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, { $set: { type: req.body.type, id: req.body.id, content: req.body.content, creationDate: req.body.creationDate, createdby: req.body.createdby, options: req.body.options,answer: req.body.answer } }, { new: true }, function (err, question) {
    if (err) {
      console.log(err);
      res.render(400, { question: req.body });
    }
    res.send({ id: question._id });
  });
};

// Delete an question
questionController.delete = (req, res) => {
  Question.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.send(400, { msg: "Question deleted" })
    }
    else {
      console.log("Question deleted!");
      res.send({ "msg": "Question deleted successfully" });
    }
  });
};

// Delete an question
questionController.createdby = (req, res) => {
  Question.findOne({ _id: req.params.id })
    .populate('createdby') // only works if we pushed refs to question.mentor
    .exec((err, question) => {
      if (err) {
        console.log(err);
        res.status(400).send({ err: err });
      } else {
        res.send(question)
      }
      console.log(question);
    });
};

// Delete an question
questionController.options = (req, res) => {
  Question.findOne({ _id: req.params.id })
    .populate('options') // only works if we pushed refs to question.mentor
    .exec((err, options) => {
      if (err) {
        console.log(err);
        res.status(400).send({ err: err });
      } else {
        res.send(options)
      }
      console.log(options);
    });
};
module.exports = questionController;
