import React from 'react';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import { useTable } from 'react-table';


function Categories(){
        const data = React.useMemo(() =>
        [
        {
            categoryID: 1,
            category_name: 'Laptop',
        },
        {
            categoryID: 2,
            category_name: 'Smartphone',
        },
        ],
        []
        );


        const columns = React.useMemo(
            () => [
                {
                    Header: 'Category Info',
                    columns: [
                        {   
                            Header: 'Category ID',
                            accessor: 'categoryID',
                        },
                        {
                            Header: 'Category Name',
                            accessor: 'category_name',
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
                <p>Enter new category</p>
                <form>
                    <label>
                        Category Name
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

export default Categories