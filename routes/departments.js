const exp = require("express");
const router = exp.Router();
const Departments = require("../models/model_department");
const Student = require("../models/model_student");

//retrieve all students data
router.get("/get_all_students", async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.json(allStudents);
  } catch (error) {
    res.json("Error : " + error);
  }
});

//retrieve all depts data
router.get("/get_all_depts", async (req, res) => {
  try {
    const allDept = await Departments.find();
    res.json(allDept);
  } catch (error) {
    res.json("Error: " + error);
  }
});

//retrieve dept data dynamically
router.get("/get_dept_by_id/:dynamic_addr", async (req, res) => {
  try {
    const one_dept = await Departments.findById(req.params.dynamic_addr);
    // res.json(one_dept);
    res.json({
      error: false,
      message: one_dept,
    });
  } catch (error) {
    res.json("Error: " + error);
  }
});

//retieve student data dynamically
router.get("/get_stu_by_id/:dynamic_stu_id", async (req, res) => {
  try {
    const one_stu = await Student.findById(req.params.dynamic_stu_id);
    res.json({
      error: false,
      message: one_stu,
    });
  } catch (error) {
    res.json("Error: " + error);
  }
});

//insert a dept
router.post("/insert_dept", async (req, res) => {
  const departments = new Departments({
    name: req.body.name,
    course_num: req.body.course_num,
    faculty: req.body.faculty,
  });
  try {
    const result = await departments.save();
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

//insert a stduent
router.post("/insert_student", async (req, res) => {
  const stu = new Student({
    name: req.body.name,
    semester: req.body.semester,
    batch: req.body.batch,
  });
  try {
    const result = await stu.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

//update a student data
router.patch("/update_stu/:dynamic_id", async (req, res) => {
  try {
    const one_stu = await Student.findById(req.params.dynamic_id);
    one_stu.name = req.body.name; //update name
    const result = await one_stu.save();

    res.json(result);
  } catch (error) {
    res.json("Error: " + error);
  }
});

//delete a student data
router.delete('/delete_stu_info/:id', async (req, res) => {
    try {
        const stu = await Student.findById(req.params.id);
        const result = await stu.delete();

        res.json(result);
    } catch (error) {
        res.json("Error : "+ error)
    }
})

module.exports = router;
