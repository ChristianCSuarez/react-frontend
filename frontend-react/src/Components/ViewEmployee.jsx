import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import EmployeeService from "../Services/EmployeeService";
import { ChevronLeftIcon, IdentificationIcon } from '@heroicons/react/24/solid'

const ViewEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({});
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then( (res) =>{
            setEmployee(res.data);
            console.log(employee)
        }).catch(err => console.log(err));
    },[]);
    return(
      <div className='flex items-center justify-center'>
        <IdentificationIcon className='size-20'/>
        <div>
            <h5 className='flex items-center justify-center font-semibold text-lg'>Información del Empleado</h5>
            <div className='flex flex-col items-center w-100 py-5 px-8 text-xl font-light'>
                <div className='flex justify-between'>
                    <span>Nombre:</span><span>{employee.firstName}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Apellido</span><span>{employee.lastName}</span>
                </div>
                <div className='flex justify-between mb-3'>
                    <span>Correo:</span><span>{employee.email}</span>
                </div>
                <div className='flex justify-between items-center bg-blue-600 rounded-lg px-3'>
                <ChevronLeftIcon className="size-6 text-black cursor-pointer" />
                    <button 
                        onClick={()=>{navigate('/')}}
                        >Atrás
                    </button>
                </div>
            </div>
        </div>
     </div>
    );
}
export default ViewEmployee;