import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';
import { useState } from 'react';
import Axios from 'axios';


function Products(){

    const [productList, setProductList] = useState([]);
    const getProducts = () =>{
        Axios.get("http://localhost:3001/products").then((response) => {
            setProductList(response.data);
        })
    }

        const data = React.useMemo(() =>
        productList,
        [productList]
        );


        const columns = React.useMemo(
            () => [
                {
                    Header: 'Product Info',
                    columns: [
                        {
                            Header: 'ProductID',
                            accessor: 'productID'
                        },
                        {   
                            Header: 'Name',
                            accessor: 'productName',
                        },
                        {
                            Header: 'Price',
                            accessor: 'productPrice',
                        },
                    ],
                },
            ],
            []
           );
        
           const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
           } = useTable({ columns, data })
        
        return(
            <div>
                <p>Enter new product</p>
                <form>
                    <label>
                        Name
                        <input
                        type="text"
                        />
                    </label>
                    <label>
                        Price
                        <input
                        type="text"
                        />
                    </label>
                    <button type="button">
                        Enter
                    </button>
                    {/* {this.state.error && <p>You need to have both a url and a caption</p>} */}
                </form>
                <p>Search product</p>
                <form>
                    <label>
                        Name
                        <input
                        type="text"
                        />
                    </label>
                    <button type="button">
                        Search
                    </button>
                    {/* {this.state.error && <p>You need to have both a url and a caption</p>} */}
                </form>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                        ))}
                        <button onClick={getProducts}>Show</button>
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        );
}

export default Products