import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "../Card/Card"
import MiniTableButton from "../MiniTableButton/MiniTableButton"
import QuantityUpdate from "../Modals/QuantityUpdate";
const ViewStock = (props) => {
    let data = [{
        barcode: "123",
        name: "Lipton",
        quantity: <MiniTableButton text="10" handleClick={() => console.log("10")} />,
        pPrice: "100",
        sPrice: "100",
        category: "Tea",
        company: "Unilever",
        seller: <MiniTableButton text="Sadiq" handleClick={() => console.log("Sadiq")} />
    }];
    const columns = [
        {
            Header: "Barcode",
            accessor: "barcode",
            sortable: false,
            filterable:true
        },
        {
            Header: "Name",
            accessor: "name",
            sortable: false
        },
        {
            Header: "Quantity",
            accessor: "quantity",
            sortable: false
        },
        {
            Header: "Purchase Price",
            accessor: "pPrice",
            sortable: false
        },
        {
            Header: "Sale Price",
            accessor: "sPrice",
            sortable: false
        },
        {
            Header: "Category",
            accessor: "category",
            sortable: false
        },
        {
            Header: "Company",
            accessor: "company",
            sortable: false
        },
        {
            Header: "Seller",
            accessor: "seller",
            sortable: false
        }
    ]
    return (
        <div>
            <Card
                content={
                    <ReactTable
                        data={data}
                        columns={columns}
                        loading={false}
                        className="-striped -highlight"                      
                        defaultPageSize={10}
                    />

                } />
        </div>
    );
};

export default ViewStock;