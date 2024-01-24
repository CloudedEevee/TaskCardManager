import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TaskList from '../TaskList';
import CreateTaskForm from '../forms/CreateTaskForm';

const TaskPage = (props) => {
    const [taskList, setTaskList] = useState([]);
    // const [isCompleteList, setIsCompleteList] = useState([]);
    const [ errs, setErrs ] = useState([]);    
    
    //////////////////////////////////////////////////////////// Top Level Functions
    /////////////// Create
    const newTask = (taskParam) => {
        axios.post('http://localhost:8000/api/tasks', taskParam)
        .then(res => {
                console.log(res.data); 
                setTaskList([...taskList, res.data]);
            })
            .catch(err=>{
                console.log(err.response)
                setErrs(err.response.data.errors);
            })   
        };

    /////////////// Read
    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
        .then(res => {
            console.log(res.data.tasks);
            setTaskList(res.data.tasks);
        })
        .catch(err => console.log(err))
    }, []);
    

    /////////////// Update 
    const updateTask = (taskParam) => {
        axios.patch('http://localhost:8000/api/tasks/' + taskParam._id, taskParam)
        .then(res => {
                console.log(res.data); 
            })
        .catch(err=>{
            setErrs(err.response.data.errors);
        }) 
        
    }

    // const updateCompleteList = () =>{
    //     axios.get('http://localhost:8000/api/tasks')
    //     .then(res => {
    //         const taskList = res.data.tasks;
    //         const updatedList = taskList.map((thisTask) => {
    //             return thisTask.isComplete ? thisTask._id : null;
    //         }).filter(id => id !== null);

    //         setIsCompleteList(prevList => [...prevList, ...updatedList]);
    //     })
    //     .catch(err => console.log(err))
    // }

    /////////////// Delete
    const deleteTask = (id) =>{
        axios.delete('http://localhost:8000/api/tasks/' + id)
        .then(res => {
            console.log(res);
            removeFromDom(id);
        }) 
        .catch(err => console.log(err))
    }

    //////////////////////////////////////////////////////////// Second Level Functions
    const removeFromDom = (taskId) => {
        setTaskList(prevList => prevList.filter(task => task._id != taskId));
    }


    //////////////////////////////////////////////////////////// Return
    return (
        <div className='taskCard'>
            <CreateTaskForm onSubmitProp={newTask} errs={errs} />
            
            <TaskList onSubmitProp={updateTask} deleteTask={deleteTask}
                updateTask={updateTask}
                taskList={taskList} />
        </div>
    )
    
};



export default TaskPage;
