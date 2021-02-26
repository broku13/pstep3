import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';
import { useState } from 'react';
import Axios from 'axios';



function Customers(){
    const [customerList, setCustomerList] = useState([]);
    const getCustomers = () =>{
        Axios.get("http://localhost:3001/customers").then((response) => {
            setCustomerList(response.data);
        })
    }
        const data = React.useMemo(() =>
        customerList,
        [customerList]
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
                            accessor: 'firstName',
                        },
                        {
                            Header: 'Last Name',
                            accessor: 'lastName',
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
                            Header: 'Address ID',
                            accessor: 'addressID'
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
                        <button onClick={getCustomers}>Show</button>
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