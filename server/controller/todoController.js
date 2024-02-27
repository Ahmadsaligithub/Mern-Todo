const todoModels = require("../models/todoModels");

module.exports.getTodo = async (req, res) => {
  const toDos = await todoModels.find();
  res.send(toDos);
};

module.exports.saveTodo = async (req, res) => {
  const { toDo } = req.body;
  todoModels
    .create({ toDo })
    .then((data) => {
      console.log("Saved Successfully....");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.send({
        error: err,
        msg: "Something went wrong",
      });
    });
};

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;
  todoModels
    .findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Update Successfully....");
    })
    .catch((err) => {
      console.log(err.message);
      res.send({
        error: err,
        msg: "Something went wrong",
      });
    });
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  todoModels
    .findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err.message);
      res.send({
        error: err,
        msg: "Something went wrong",
      });
    });
};
