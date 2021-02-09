import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';



function Customers(){
        const data = React.useMemo(() =>
        [
        {
            customerID: 1,
            first_name: 'Pranav',
            second_name: 'Simha',
            age: 21,
            credit: 'xxxxxxxxxxxxxx',
            address: 'abc 1st street'
        },
        {
            customerID: 2,
            first_name: 'Sahil',
            second_name: 'Jahni',
            age: 21,
            credit: 'xxxxxxxxxxxxxx',
            address: 'abc 2nd street'
        },
        ],
        []
        );


        const columns = React.useMemo(
            () => [
                {
                    Header: 'Customer Info',
                    columns: [
                        {
                            Header: 'CustomerID',
                            accessor: 'customerID'
                        },
                        {   
                            Header: 'First Name',
                            accessor: 'first_name',
                        },
                        {
                            Header: 'Second Name',
                            accessor: 'second_name',
                        },
                        {
                            Header: 'Age',
                            accessor: 'age'
                        },
                        {
                            Header: 'Credit',
                            accessor: 'credit'
                        },
                        {
                            Header: 'Address',
                            accessor: 'address'
                        }
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
                <p>Enter new customer</p>
                <form>
                    <label>
                        First Name
                        <input
                        type="text"
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                        type="text"
                        />
                    </label><label>
                        Age
                        <input
                        type="text"
                        />
                    </label>
                    <label>
                        Credit
                        <input
                        type="text"
                        />
                    </label>
                    <label>
                        Address
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
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        );
}

export default Customers