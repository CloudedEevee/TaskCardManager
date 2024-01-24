const TaskController = require('../controllers/task.controller');

module.exports = app => {
    app.get('/api', TaskController.index);
    app.get('/api/tasks', TaskController.findAllTasks);
    app.get('/api/tasks/:id', TaskController.findOneTask);
    app.patch('/api/tasks/:id', TaskController.updateTask);
    app.post('/api/tasks', TaskController.createNewTask);
    app.delete('/api/tasks/:id', TaskController.deleteExistingTask);
}