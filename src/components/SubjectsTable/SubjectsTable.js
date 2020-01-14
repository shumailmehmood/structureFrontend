import React, { useState } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "components/Card/Card.jsx";
import { getSubjects } from "../../api/api";
const SubjectsTable = (prop) => {
    const [state, setState] = useState([]);
    React.useEffect(() => {
        getSubjects().then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    }, [])
    let data = [];
    const columns = [
        {
            Header: "Subject",
            // accessor: prop => { return prop },
            id: 'subject',
            sortable: false
        },
        {
            Header: "Token",
            id: "token",
            sortable: false,

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

export default SubjectsTable;