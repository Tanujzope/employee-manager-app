import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
import EmployeeList from './EmployeeList'

const LoginPage = ({msg}) => {
    const [state, setState] = useState({
        username: '',
        password: '',
        mesg : '',
        logedIn : false
    })


    const changeHandler = (event)=>{
        event.preventDefault()

        setState({
            ...state,
            [event.target.id] : event.target.value
        })
    }

    const loginUser = (state)=>{
        const user = {
            username : state.username,
            password: state.password
        }


        EmployeeService.LoginAccount(user).then((res)=>{
            setState({
                mesg : res.data.message,
                logedIn : true
            })
            
            
            
        }).catch((rej)=>{
            setState({
                mesg : rej.response.data.message
            })
        })

    }

  return (
    <React.Fragment>
    { state.logedIn ? (<EmployeeList/>): 
    <>
         <div className="container mt-5">
            <h1 className='text-center'>Employee Management</h1>
                <div className="row">
                    
                    <div className="card col-md-6 offset-md-3">
                        <h3 className='text-center'>Login User</h3>
                        <h3 className='text-center'>{msg}</h3>
                        <h3 className='text-center text-danger'>{state.mesg}</h3>
    
                        <div className="card-body">
                            <form action="">
                                <div className="form-group m-3">
                                    <label htmlFor="username">Enter Username</label>
                                    <input type="text" className='form-control' id='username'  placeholder='Username' onChange={changeHandler} />
                                </div>
                                <div className="form-group m-3">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" className='form-control' id='password' placeholder='Password' onChange={changeHandler} />
                                </div>
                                <p className='text-center'>New Here?<Link to={'/employees/createAccount'}  style={{textDecoration: "none"}}>Create Account</Link> </p>
                                <div className="container w-50 text-center">
                                    <button type='button' className='btn btn-primary' onClick={()=> loginUser(state)}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
    }
    </React.Fragment>
  )
}

export default LoginPage
