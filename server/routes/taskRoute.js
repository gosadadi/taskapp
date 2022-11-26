const express=require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task=require("../models/taskModel");
const router=express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
// // ========routes===================
// // 1.=====create task============
// router.post("/",createTask);
// // 2.=======get all tasks========
// router.get("/",getTasks);
// // 3.=======get one route======
// router.get("/:id",getTask);
// // 4.=======delet task======
// router.delete("/:id",deleteTask);
// // 5.=======update task========
// router.put("/:id",updateTask);

module.exports=router