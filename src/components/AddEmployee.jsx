import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import HeaderComponenet from './HeaderComponenet';


class AddEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            address: '',
        }
    }



    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contact: Number(this.state.contact),
            address: this.state.address
        }

        EmployeeService.addEmployees(employee).then(res=>{
            alert("Employee Added Successfully");
            window.location.reload()
            return res.data
            
        }).catch(rej=>{
            alert("Error")
        })

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmailNameHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changeContactNameHandler = (event) => {
        this.setState({ contact: event.target.value })
    }

    changeAddressNameHandler = (event) => {
        this.setState({ address: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
            <HeaderComponenet/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" name="firstName" id="firstName" placeholder='eg. John' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" placeholder='eg. Cena' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" placeholder='eg. johncena@gmail.com' className='form-control' value={this.state.email} onChange={this.changeEmailNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="number" name="contact" id="contact" placeholder='eg. 8888888888' className='form-control' value={this.state.contact} onChange={this.changeContactNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" name="address" id="address" placeholder='eg. New York' className='form-control' value={this.state.address} onChange={this.changeAddressNameHandler} />
                                    </div>

                                    <button className='btn btn-success me-2 mt-2' onClick={this.saveEmployee}>Save</button>
                                    <Link to={'/employees/list'}>
                                        <button className='btn btn-danger mt-2'>Cancel</button>
                                    </Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddEmployee;
