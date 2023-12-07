import React from "react";
import { useParams } from "@remix-run/react";

const ManageUser = () => {

    const { id } = useParams()

    return(
        <h1 className="text-3xl">Manage User {id}</h1>
    )
}

export default ManageUser