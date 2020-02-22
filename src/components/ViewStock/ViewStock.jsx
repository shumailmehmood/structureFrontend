import React, { useState, useEffect } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from "../Card/Card"
import MiniTableButton from "../MiniTableButton/MiniTableButton"
import QuantityUpdate from "../Modals/QuantityUpdate";
import SellerDetails from "../Modals/SellerDetails"
import { getStock } from "../../api/api"
const ViewStock = (props) => {
    const [update, setUpdate] = useState(false)
    const [seller, setSeller] = useState(false)
    const [dataDB, setDataDB] = useState([]);
    const [metaData,setMetaData]=useState({})
    useEffect(() => {
        getStock().then(res => {
            if (res.error) { } else {
                setDataDB(res.data.data)
            }
        })
    }, []);
    
    let data = [{
        barcode: "123",
        name: "Lipton",
        quantity: <MiniTableButton text="10" handleClick={() => setUpdate(true)} />,
        pPrice: "100",
        sPrice: "100",
        category: "Tea",
        company: "Unilever",
        seller: <MiniTableButton text="Sadiq" handleClick={() => setSeller(true)} />
    }];
    const columns = [
        {
            Header: "Barcode",
            accessor: "barcode",
            sortable: false,
            filterable: true
        },
        {
            Header: "Name",
            accessor: "name",
            sortable: false
        },
        {
            Header: "Quantity",
            accessor: "quantity",
            id: "quantity",
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
            id: "seller",
            sortable: false
        }
    ]
    return (
        <div>
            <SellerDetails show={seller} handleClose={() => setSeller(false)} />
            <QuantityUpdate show={update} handleClose={() => setUpdate(false)} />
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