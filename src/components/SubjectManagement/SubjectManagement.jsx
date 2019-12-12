import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "components/Card/Card.jsx";

import Button from "../CustomButton/CustomButton.jsx";

const SubjectManagement = () => {
    const [data] = useState(['Easy','Medium','Hard','Expert']);       
   
    const columns = [
        {
            Header: "Level",
            accessor: prop=>{return prop},
            id:'level',
            sortable:false
        },
        {
            Header: "Action",
            accessor: "id",
            sortable:false,
            Cell: props => (
                <div className="actions-right">
                    <Button
                        onClick={() => { }}
                        bsStyle="danger"
                        simple
                        icon
                    >
                        <i className="fa fa-plus" />
                    </Button>                   
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

export default SubjectManagement;


 