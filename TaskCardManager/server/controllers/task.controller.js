const Task = require('../models/task.model'); //.model STAYS .model

module.exports = {
    ///////////////////////////////////////////// CREATE
    createNewTask: (req, res) => {
        const {title, isComplete, subtasks} = req.body;
        console.log("Saving Task.....")
        Task.create({
            title: title,
            isComplete: isComplete,
            subtasks: subtasks
        })
            .then(task => {
                console.log(task);
                res.json(task);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },


    ///////////////////////////////////////////// READ
    findAllTasks: (req, res) => {
        Task.find({})
        .then((tasks) => {
            console.log("tasks.controller line 28:" + tasks);
            res.json({ tasks })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    findOneTask: (req, res) => {
        Task.findOne({ _id: req.params.id })
            .then(oneTask => {
                console.log(oneTask);
                res.json({ task: oneTask })
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    findTaskByTaskname: (req, res) => {
        Task.find({ taskname: req.params.taskname })
        .then(matchingTasks => {
            console.log(matchingTasks);
            res.json({ tasks: matchingTasks })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    ///////////////////////////////////////////// UPDATE
    updateTask: (req, res) => {
        Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedTask => {
                console.log(updatedTask);
                res.json(updatedTask)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// DESTROY
    deleteExistingTask: (req, res) => {
        Task.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => {
                console.log(deleteConfirm);
                res.json(deleteConfirm)
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// OTHER
    index: (req, res) => {
        res.json({ message: "Hello World" });
    }
}
