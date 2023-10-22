import axios from "axios";

const allEmpURL = "http://localhost:8082/employees";
const addEmpURL =  'http://localhost:8082/addEmployees';
const deleteEmpURL = 'http://localhost:8082/delete';
const getSingleEmpURL = 'http://localhost:8082/getEmployee';
const updateEmpURL = 'http://localhost:8082/update';
const createUserURL = 'http://localhost:8082/createAccount';
const loginUserURL = "http://localhost:8082/login";


class EmployeeService{
    getEmployees(){
        return axios.get(allEmpURL)
    }

    addEmployees(employee){
        return(
            axios.post(addEmpURL, employee)
        )
    }

    deleteEmployee(id){
        return axios.delete(`${deleteEmpURL}/${id}`)
    }

    getSingleEmployee(id){
        return axios.get(`${getSingleEmpURL}/${id}`)
    }

    updateEmployee(emp, id){
        return axios.put(`${updateEmpURL}/${id}`,emp)
    }


    createAccount(emp){
        return axios.post(createUserURL, emp)
    }

    LoginAccount(user){
        return axios.post(loginUserURL, user)
    }

    
}

export default new EmployeeService()