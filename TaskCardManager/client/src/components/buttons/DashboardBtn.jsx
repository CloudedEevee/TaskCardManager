import React from "react";
import { Link } from "react-router-dom";

const DashboardBtn = (props) => {

    return (
        <p>
            <Link to={"/dashboard"}>Dashboard</Link>
        </p>
    )
}


export default DashboardBtn;