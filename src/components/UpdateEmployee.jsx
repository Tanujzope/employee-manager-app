import React, { Component } from 'react';
import { Link, useParams} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import HeaderComponenet from './HeaderComponenet';


class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {  
            id : '',
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            address: '',
            msg : '',
            employee : null,
            employees : [] 
        }
    }

    componentDidMount(){
        const urlId = window.location.pathname.split('/').pop();
    
    // Parse 'id' as an integer if needed
        const id = parseInt(urlId, 10);

        this.setState({id})

        EmployeeService.getSingleEmployee(id).then((res)=>{
            let emp = res.data
            this.setState({
                firstName : emp.firstName,
                lastName : emp.lastName,
                email : emp.email,
                contact : emp.contact,
                address : emp.address,
                
            })
            
        })
    }



    updateEmployee = (e) => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contact: Number(this.state.contact),
            address: this.state.address
        }


        EmployeeService.updateEmployee(employee, this.state.id).then((res)=>{
            // alert("Employee Details Updated")

            const {msg, pojo, employees} = res.data           

            this.setState({
                 msg : msg,
                 employee : pojo,
                 employees : employees
            })
        })
        .catch((rej)=>{
            alert("error")
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
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center">Update Employee</h3>
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

                                    <button className='btn btn-success me-2 mt-2' onClick={this.updateEmployee}>Update</button>
                                    <Link to={'/employees/list'}>
                                        <button className='btn btn-danger mt-2'>Cancel</button>
                                    </Link>

                                </form>
                                <h2 className='text-success text-center'>{this.state.msg}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default UpdateEmployee;
