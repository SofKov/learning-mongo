const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    todo: {
        type: String,
    },
    taskComplete: {
        type: Boolean,
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports={
    Task,
};