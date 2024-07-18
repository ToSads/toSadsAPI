const mongoose = require("mongoose")
const examShcema = mongoose.Schema(
    {
        "name":String,
        "group": Array,
        "timeInMinutes": Number, 
        "language": String,
        "catagory":String,
        "questions": Object
    }
);

const model = mongoose.model("Exams", examShcema)

module.exports = model;

/* QUESTIONS OBJECT SHOULD BE LIKE THIS!
{
            "1":{
                "question": "this is a testing question 1",
                "answers": [
                    {
                        "text":"wrong 1",
                        "value": false
                    },{
                        "text":"wrong 2",
                        "value": false
                    },{
                        "text":"correct",
                        "value": true
                    }
                ]
            },"2":{
                "question": "this is a testing question 2",
                "answers": [
                    {
                        "text":"correct",
                        "value": true
                    },{
                        "text":"wrong 1",
                        "value": false
                    },{
                        "text":"wrong 2",
                        "value": false
                    }
                ]
            },"3":{
                "question": "this is a testing question 3",
                "answers": [
                    {
                        "text":"correct",
                        "value": true
                    },{
                        "text":"wrong 1",
                        "value": false
                    },{
                        "text":"wrong 2",
                        "value": false
                    },{
                        "text":"wrong 3",
                        "value": false
                    }
                ]
            }
        }
    
    
    */


