const express = require("express")
const { createExam, getAllExams, updateExam, getSingleExam, deleteExam } = require("../controllers/examControllers")
const router = express.Router()

router.route("/").get(getAllExams).post(createExam)
router.route("/:examId").get(getSingleExam).put(updateExam).delete(deleteExam)

module.exports = router