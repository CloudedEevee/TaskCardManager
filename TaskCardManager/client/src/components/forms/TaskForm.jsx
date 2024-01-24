import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'; 


const TaskForm = (props) => {
    const { onSubmitProp, errs, thisTask, updateTask } = props;

    const [title, setTitle] = useState(thisTask.title);
    const [subtasks, setSubtasks] = useState([]);


    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let _id = thisTask._id;
        let isComplete = thisTask.isComplete;
        onSubmitProp({title, isComplete, subtasks, _id})
    }


    const completeHandler = (id) => {
        axios.get('http://localhost:8000/api/tasks/' + id)
        .then(res => {
            let updatedRes = res.data.task;
            updatedRes.isComplete = !updatedRes.isComplete;
            return updatedRes;
        })
        .then(updatedRes => {
            updateTask(updatedRes);
        })
        .catch(err => console.log(err))
    }

    //////////////////////////////////////////////////////////// Return
    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group>
                <Form.Check 
                    type='checkbox' 
                    id='default-checkbox' 
                    defaultChecked={ thisTask.isComplete }
                    onChange={ (e) => completeHandler(thisTask._id) }
                    label={
                        <Form.Control type='text' 
                        placeholder='Insert New Task' 
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                        onSubmit={onSubmitHandler} />
                    }
                />
            </Form.Group>
        </Form>
    )

}



export default TaskForm;