import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import SubjectEditModal from "./SubjectEditModal";
import "react-table/react-table.css";
import { deactivateSubject, getSubjects } from '../../api/api';
import Card from "components/Card/Card.jsx";
import Switch from "react-switch"; 
import Button from "../CustomButton/CustomButton.jsx";
import {withRouter} from 'react-router'

const SubjectTable = (prop) => {
    const [data, setData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [doc, setDoc] = useState();
    const [loading, setLoading] = useState(false);
    
    async function anyNameFunction() {
        setLoading(true)
        let response = await getSubjects();
        if (!response.data) {
            setData([])
            setLoading(false)
        } else {
            setData(response.data)
            setLoading(false)
        }
    }
    const handleClickButton = (val) => { prop.history.push(`/admin/subjectmanagement/QuizManagement?id=${val}`);}
    useEffect(() => {

        // Execute the created function directly
        anyNameFunction();
    }, []);

    function handleEdit(params) {

        setShowEdit(true);
        setDoc(params)
    }
    function handleClose() {
        setShowEdit(false)
        anyNameFunction();
    }
    async function changeStatus(id) {
        setLoading(true)
        let response = await deactivateSubject(id);
        if (!response.data) {
            anyNameFunction();
        } else {
            anyNameFunction();
        }

    }
    const columns = [
        {
            Header: "Name",
            accessor: "id",
            Cell: props =>
     (<Button className='btn-fill btn-wd btn btn-warning'onClick={()=>handleClickButton(props.value)}>{props.original.name}</Button>)
        },
        {
            Header: "Created At",
            accessor: "createdAt",
            width:95
        },
        {
            Header: "Action",
            accessor: "id",
            Cell: props => (
                <div className="actions-right">
                    <Button
                        onClick={() => { handleEdit(props) }}
                        bsStyle="warning"
                        simple
                        icon
                    >
                        <i className="fa fa-edit" />
                    </Button>{" "}
                    <Switch
                        onChange={() => { changeStatus(props.value, !props.original.isactive) }}
                        checked={props.original.isactive}
                        className="react-switch"
                    />
                </div>
            )
        }
    ]
    return (
        <div>
            {showEdit ? <SubjectEditModal handleClose={handleClose} show={showEdit} doc={doc} /> : ''}
            <Card
                ctAllIcons
                content={
                    <ReactTable
                        data={data}
                        columns={columns}
                        loading={loading}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    >
                    </ReactTable>
                } />
        </div>
    );
};

export default withRouter(SubjectTable);