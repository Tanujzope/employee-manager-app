import React, { useState } from 'react';
import { Link, Route, } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import LoginPage from './LoginPage';







const CreateAccount = () => {

    

    const [state, setState] = useState({
        username: '',
        password: '',
        conpassword: '',
        msg : '',
        accountCreated : false
    });

    

    //Used for both change and blur
    const changeHandler = (event) => {
        event.preventDefault();
        setState({
            ...state,
            [event.target.id]: event.target.value,
        });
    };

    

    const createAc = (state) =>{
        if(state.password !== state.conpassword){
            alert("Password Dont Match")
        }
        else{

            const newUser = {
                 username : state.username,
                 password : state.password
             }

            

            EmployeeService.createAccount(newUser).then((res)=>{
                setState({
                    msg : res.data.message,
                    accountCreated : true
                })
               
                
            }).catch((rej)=>{
                console.log("Error")
            })

            
        }
    }

    

    

    return (
        <React.Fragment>
           {  state.accountCreated ? ( <LoginPage msg={state.msg}/>) : <>
            <div className="container mt-5">
                <h1 className='text-center'>Employee Management</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                 
                        <h3 className='text-center'>Create Account</h3>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group m-3">
                                    <label htmlFor="username">Enter Username</label>
                                    <input type="text" className='form-control' id='username' placeholder='Username' onChange={changeHandler} />
                                </div>
                                <div className="form-group m-3">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" className='form-control' id='password' placeholder='Password' onChange={changeHandler} />
                                </div>
                                <div className="form-group m-3">
                                    <label htmlFor="conpassword">Confirm Password</label>
                                    <input type="password" className='form-control' id='conpassword' placeholder='Confirm Password' onChange={changeHandler} />
                                </div>
                                <p className='text-center'>Already Have an Account? <Link to={'/employees/login'} style={{ textDecoration: "none" }}>Login</Link></p>
                                <h3 className='text-center'>{state.msg}</h3>
                                <div className="container w-50 text-center">
                                    <button type='button' className='btn btn-primary'  onClick={()=> {createAc(state)}}>Create Account</button>
                                </div>
                            </form>
                        </div>
                 
                    </div>
                    
                
                </div>
            </div>
            </>  }
        </React.Fragment>
    );
};

export default CreateAccount;
