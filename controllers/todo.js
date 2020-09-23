const md5 = require("md5");
const db = require("../models");
module.exports = {
  getUsers: async (req, res) => {
    try {
      let users = await db.Todo.findAll();
      res.json(users);
    } catch (err) {
      res.send(err);
    }
  },

  createUser: async (req, res) => {
    try {
      if (md5(req.body.password) === md5(req.body.confirm_password)) {
        let newUser = await db.Todo.create({
          username: req.body.username,
          password: md5(req.body.password),
          confirm_password: md5(req.body.confirm_password),
          email: req.body.email,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
        });
        res.json(newUser);
      } else {
        res.send("passwords are not matching");
      }
    } catch (err) {
      res.send(err);
    }
  },
  userLogin: async (req, res) => {
    try {
      let loginDetails = db.Todo.findAll({
        where: {
          username: req.body.username,
          password: md5(req.body.password),
        },
      });
      res.json(loginDetails);
    } catch (err) {
      res.send(err);
    }
  },

  getId: async (req, res) => {
    try {
      let accessDetails = db.Todo.findAll({
        where: { id: req.headers.accesstoken },
      });
      res.json(accessDetails);
    } catch (err) {
      res.send(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await db.Todo.destroy({
        where: { id: req.body.id },
      });
      res.json({ success: true });
    } catch (err) {
      res.send(err);
    }
  },
};
