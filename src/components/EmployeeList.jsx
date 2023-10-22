import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';
import { Link } from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';
import HeaderComponenet from './HeaderComponenet';

class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],


        };
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({
                employees: res.data,
            });
        });
    }

    deleteEmp(id) {
        EmployeeService.deleteEmployee(id)
            .then((res) => {
                alert('Employee Deleted Successfully');
                window.location.reload();
            })
            .catch((rej) => {
                alert('Error');
            });
    }




    render() {
        return (
            <>
                <HeaderComponenet />
                <div className="container">

                    <div className="row">
                        <h2 className="text-center mt-3">Employees List</h2>
                        <Link to={'/employees/addEmployee'}>
                            <button className="btn btn-primary">Add Employees</button>
                        </Link>
                    </div>
                    <br />
                    <div className="row mb-5">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Email</th>
                                    <th>Employee Contact</th>
                                    <th>Employee Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((cEmp) => {
                                    return (
                                        <tr key={cEmp.id}>
                                            <td>{cEmp.id}</td>
                                            <td>{cEmp.firstName}</td>
                                            <td>{cEmp.lastName}</td>
                                            <td>{cEmp.email}</td>
                                            <td>{cEmp.contact}</td>
                                            <td>{cEmp.address}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Link to={`/employees/update/${cEmp.id}`}>
                                                        <button
                                                            className="btn btn-primary me-2"
                                                        >
                                                            Update
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => this.deleteEmp(cEmp.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        );
    }
}

export default EmployeeList;
