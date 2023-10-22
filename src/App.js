import './App.css';
import React from 'react';
import EmployeeList from './components/EmployeeList';
import HeaderComponenet from './components/HeaderComponenet';
import FooterComponenet from './components/FooterComponenet';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <React.Fragment>

     

  
      

        <Routes>
          <Route path={'/'} element={<Navigate to={'/employees/createAccount'} />}></Route>
          <Route path={'/employees/createAccount'} element={<CreateAccount/>}></Route>
          <Route path={'/employees/login'} element={<LoginPage/>}></Route>
          <Route path={'/employees/list'} element={<EmployeeList />}></Route>
          <Route path={'/employees/addEmployee'} element={<AddEmployee/>}></Route>
          <Route path={`/employees/update/:id`} element={<UpdateEmployee/>}></Route>
        </Routes>



      <FooterComponenet />



    </React.Fragment>
  );
}

export default App;
