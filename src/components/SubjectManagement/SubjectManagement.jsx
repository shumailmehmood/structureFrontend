import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "components/Card/Card.jsx";
import querystring from 'query-string';
import Button from "../CustomButton/CustomButton.jsx";
import { withRouter } from "react-router-dom";
const SubjectManagement = (prop) => {
    const [data] = useState(['Easy', 'Medium', 'Hard', 'Expert']);
    const columns = [
        {
            Header: "Level",
            accessor: prop => { return prop },
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
                                search: `?level=${props.original}&id=${querystring.parse(prop.location.search).id}`
                            })
                        }}
                        bsStyle="danger"
                        simple
                        icon
                    >
                        <i className="fa fa-plus" />
                    </Button>
                    {/* <Button
                        onClick={() => {
                            prop.history.push({
                                pathname: '/admin/subjectCred',
                                search: `?level=${props.original}&id=${querystring.parse(prop.location.search).id}`
                            })
                        }}
                        bsStyle="danger"
                        simple
                        icon
                    >
                        <i className="fa fa-eye" />
                    </Button> */}
                </div>
            )
        }
    ]
    return (
        <div>
            <Card
                ctAllIcons
                content={
                    <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    >
                    </ReactTable>
                } />
        </div>
    );
};

export default withRouter(SubjectManagement);


