import { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const ListEmployee = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [employees,setEmployees] = useState([]);
    const editEmployee = (employeeId) => {
        navigate(`add-employee/${employeeId}`)
    }
    const deleteEmployee = (employeeId) => {
        EmployeeService.DeleteEmployee(employeeId).then(() => {
            setEmployees(employees.filter(emp => emp.id !== employeeId));
        });
    }
    const viewEmployee = (employeeId) => {
        navigate(`view-employee/${employeeId}`);
    }
    useEffect(()=>{
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(err => console.log(err));
    },[]);
    return(
        <div className='flex flex-col items-center justify-center relative w-full mb-4 '>
            <h2 className='font-medium text-xl'>Empleados</h2>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <Search
                    search={search}
                    setSearch={setSearch}
                    />
                    <table className='w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                            <th className='px-6 py-3'>Nombre</th>
                            <th className='px-6 py-3'>Apellido</th>
                            <th className='px-6 py-3'>Correo</th>
                            <th className='px-6 py-3'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.filter((em) => em.firstName.toLowerCase().includes(search))
                                .map(
                                    employee => 
                                    <tr key= {employee.id}>
                                        <td key={employee.firstName}>{employee.firstName}</td>
                                        <td key={employee.lastName}>{employee.lastName}</td>
                                        <td key={employee.email}>{employee.email}</td>
                                        <td><button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' 
                                                onClick={()=>editEmployee(employee.id)}>
                                                Actualizar
                                                </button>
                                            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                                                onClick={() => deleteEmployee(employee.id)}>Eliminar</button>
                                            <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'
                                            onClick={() => viewEmployee(employee.id)}>Ver</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
}
export default ListEmployee;