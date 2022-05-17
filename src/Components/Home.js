import React from 'react'
import { TableData } from '../data';

const Home = () => {
    return (
        <>

            <div className='container'>
                <h3> Employee Data List </h3>
                <button className='btn btn-primary'> Add Data</button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Employee email</th>
                            <th scope="col">Action </th>
                        </tr>
                    </thead>

                    {
                        TableData.map((ShowTableData, index) => {
                            return <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{ShowTableData.firstName}</td>
                                        <td>{ShowTableData.lastName}</td>
                                        <td>{ShowTableData.email}</td>
                                        <td>
                                            <button className='btn btn-success'>Edit</button>

                                            <button style={{ marginLeft: 10 }} className='btn btn-danger'> Delete</button>

                                            <button style={{ marginLeft: 10 }} className='btn btn-primary'> View Data</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Home;
