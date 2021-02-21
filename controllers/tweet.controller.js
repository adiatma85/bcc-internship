const db = require("../models");
const Tweet = db.tweets;

// create tweet
function createTweet(req, res, next) {
  Tweet.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return next(err)
    });
}

// findAll
function findAll(req, res, next) {
  Tweet.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return next(err)
    });
}

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  Tweet.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return next(err)
    });
}

// updateOne
function update(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };
  Tweet.update(req.body, { where: condition })
    .then((num) => {
      if (num != 1) {
        return next(err)
      }
      res.status(200).send({
          success: true,
          message: "Update successful",
      });
    })
    .catch((err) => {
      return next(err)
    });
}

// delete
function _delete(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };

  Tweet.destroy({
    where: condition,
  })
    .then((num) => {
      if (num != 1) {
        return next(err)
      }
      res.status(200).send({
        message: "Delete successful",
      });
    })
    .catch((err) => {
      return next(err)
    });
}

module.exports = {
  createTweet,
  findAll,
  findOne,
  update,
  delete: _delete,
};
