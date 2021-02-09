import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';


function Products(){
        const data = React.useMemo(() =>
        [
        {
            productID: 1,
            name: 'Lenovo Ideapad 720s',
            price: 1100,
        },
        {
            productID: 2,
            name: 'iPhone 12',
            price: 800,
        },
        ],
        []
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
                            accessor: 'name',
                        },
                        {
                            Header: 'Price',
                            accessor: 'price',
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