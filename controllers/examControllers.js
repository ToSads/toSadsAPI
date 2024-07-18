const examModel = require("../models/examModel.js")

const createExam = async (req, res) => {
    const {name, group, timeInMinutes, language, catagory, questions} = req.body;
    const newExam = await examModel.create(
        {name, group, timeInMinutes, language, catagory, questions}
    )
    res.json(newExam)
}


const getAllExams = async (req, res) => {
    const allExams = await examModel.find()
    res.json(allExams)
}

const updateExam = async (req, res) => {
    const {examId} = req.params
    const {name, group, timeInMinutes, language, catagory, questions} = req.body
    let dfdsf = await examModel.findById(examId)
    console.log(dfdsf)
    const updatedExam = await examModel.findByIdAndUpdate(examId, {name, group, timeInMinutes, language, catagory, questions}, {new: true})
    res.json(updatedExam)
}

const getSingleExam = async (req, res) => {
    const {examId} = req.params
    const findExam = await examModel.findById(examId)
    res.json(findExam)
}

const deleteExam = async (req, res) => {
    const {examId} = req.params
    const deletedExam = await examModel.findByIdAndDelete(examId)
    res.json(deletedExam)
}



module.exports = {
    createExam,
    getAllExams,
    updateExam,
    getSingleExam,
    deleteExam
}
