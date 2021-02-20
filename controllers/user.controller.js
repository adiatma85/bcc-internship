const db = require("../models");
const User = db.users;

// create User
function createUser(req, res, next) {
  User.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in create User",
      });
    });
}

// findAll
function findAll(req, res, next) {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findAll",
      });
    });
}

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findOne",
      });
    });
}

// updateOne
function update(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };
  User.update(req.body, { where: condition })
    .then((num) => {
      if (num != 1) {
        res.status(500).send({
          message: "Affected row not one",
        });
      }
      res.status(200).send({
          success: true,
          message: "Update successful",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in update User",
      });
    });
}

// delete
function _delete(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };

  User.destroy({
    where: condition,
  })
    .then((num) => {
      if (num != 1) {
        res.status(500).send({
          message: "Affected row not one",
        });
      }
      res.status(200).send({
        message: "Delete successful",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in delete User",
      });
    });
}

module.exports = {
  createUser,
  findAll,
  findOne,
  update,
  delete: _delete,
};
