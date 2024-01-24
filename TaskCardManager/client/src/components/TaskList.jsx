import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "./forms/TaskForm";

const TaskList = (props) => {
    const {onSubmitProp, taskList, updateTask, deleteTask } = props;

    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ marginTop: "1rem" }}>
            {
                taskList.map( (thisTask, i) => (
                    <div key={thisTask._id} style={{ display: "flex", marginBottom: "1rem" }}>
                            <TaskForm onSubmitProp={onSubmitProp} updateTask={updateTask}
                                thisTask={thisTask} 
                                />
                            <Link onClick={(e) => {deleteTask(thisTask._id)}} 
                                style={{fontSize: "small", marginLeft: ".5rem", alignSelf: "center"}}>Delete</Link>
                    </div>
                ))
            }
        </div>
    )

}


export default TaskList;