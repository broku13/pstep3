import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';


function Orders(){
        const data = React.useMemo(() =>
        [
        {
            orderID: 1,
            productID: 2,
            customerID: 1,
        },
        {
            orderID: 2,
            productID: 1,
            customerID: 2,
        },
        ],
        []
        );


        const columns = React.useMemo(
            () => [
                {
                    Header: 'Orders Info',
                    columns: [
                        {   
                            Header: 'OrderID',
                            accessor: 'orderID',
                        },
                        {
                            Header: 'ProductID',
                            accessor: 'productID',
                        },
                        {
                            Header: 'CustomerID',
                            accessor: 'customerID'
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
                <p>Enter new order</p>
                <form>
                    <label>
                        ProductID
                        <input
                        type="text"
                        />
                    </label>
                    <label>
                        CustomerID
                        <input
                        type="text"
                        />
                    </label>
                    <button type="button">
                        Enter
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
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            <td><button>Delete</button></td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        );
}

export default Orders