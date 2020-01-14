import React, { useState,useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "components/Card/Card.jsx";
import querystring from 'query-string';
import Button from "../CustomButton/CustomButton.jsx";
import { withRouter } from "react-router-dom";
import { getSubjectInfo } from '../../api/api';
import LevelEditModal from "./LevelEditModal";
const SubjectManagement = (prop) => {
    //const [data] = useState(['Easy', 'Medium', 'Hard', 'Expert']);

    const [data, setData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [doc, setDoc] = useState();
    async function anyNameFunction() {
        setLoading(true)
        let response = await getSubjectInfo(querystring.parse(prop.location.search).id);
        if (!response.data) {
            setData([])
            setLoading(false)
        } else {
            setData(response.data[0].subjectLevels)
            setLoading(false)
        }
    }
    useEffect(() => {
        anyNameFunction();
    }, []);
    function handleClose() {
        setShowEdit(false)
        anyNameFunction();
    }
    function handleEdit(params,id) {
        
        let data={};
        data.params = params
        data.subjectID = id        
        setShowEdit(true);
        setDoc(data)
    }
    const columns = [
        {
            Header: "Level",
            accessor: prop => { return prop.level },
            id: 'level',
            sortable: false
        },
        {
            Header: "Action",
            accessor: "id",
            sortable: false,
            Cell: props => (
                <div className="actions-right">
                    <Button
                        onClick={() => {
                            prop.history.push({
                                pathname: '/admin/createquiz',
                                search: `?level=${props.original._id}&id=${querystring.parse(prop.location.search).id}`
                            })
                        }}
                        bsStyle="danger"
                        simple
                        icon
                    >
                        <i className="fa fa-plus" />
                    </Button>
                    <Button
                        onClick={() => {
                             handleEdit(props.original.level,querystring.parse(prop.location.search).id) }}
                        bsStyle="warning"
                        simple
                        icon
                    >
                        <i className="fa fa-edit" />
                    </Button>
                    
                </div>
            )
        }
    ]
    return (
        <div>
            {showEdit ? <LevelEditModal handleClose={handleClose} show={showEdit} doc={doc} /> : ''}
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

export default withRouter(SubjectManagement);


