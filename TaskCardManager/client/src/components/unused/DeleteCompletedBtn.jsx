import React from "react"
import { Link } from "react-router-dom";

const DeleteCompletedBtn = (props) => {
    const { onSubmitProp, isCompleteList } = props;

    //////////////////////////////////////////////////////////// Return
    return (
        <Link onClick={(e) => {onSubmitProp(isCompleteList)}} 
            style={{fontSize: "small", marginLeft: ".5rem", alignSelf: "center"}}>Delete Completed Tasks</Link>
    )
}


export default DeleteCompletedBtn;