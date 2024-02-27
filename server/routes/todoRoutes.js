const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

const router = Router();

router.get("/get", getTodo);
router.post("/save", saveTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
