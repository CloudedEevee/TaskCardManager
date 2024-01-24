import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'; 


const CreateTaskForm = (props) => {
    const { onSubmitProp, errs, taskLevel, thisTask, mainTaskInd } = props;

    const [title, setTitle] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [subtasks, setSubtasks] = useState([]);

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, isComplete, subtasks, mainTaskInd})
        if (errs.length < 1){
            setTitle("");
        }
    }

    //////////////////////////////////////////////////////////// Return
    return (
        <Form onSubmit={onSubmitHandler} className={ taskLevel == 1 ? 'mainTask' : 'subtask' }>
            <Form.Group>
                { errs.title ? 
                    <p className='err'>{errs.title.message}</p>
                    : null
                }
                <Form.Control type='text' 
                            placeholder='Insert New Task' 
                            value={ title }
                            onChange={ (e) => setTitle(e.target.value) } />
            </Form.Group>
        </Form>
    )

}



export default CreateTaskForm;