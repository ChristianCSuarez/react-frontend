import { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const CreateOrUpdateEmployee = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }
    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName: firstName,lastName:lastName,email:email};
        console.log(employee);
        if(id < 0){
            EmployeeService.createEmployee(employee).then(()=>{
                navigate("/");
            });
        } else {
            EmployeeService.updateEmployee(id,employee).then(()=>{
                navigate("/");
            });
        }
    }
    const cancel = () => {
        navigate("/")
    }
    useEffect(()=>{
        if(id < 0) {
            return;
        }
        EmployeeService.getEmployeeById(id).then(res => {
            const employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        }).catch(err => console.log(err));
    },[]);
    
    return(
            <div>
                <div>
                    <div className='flex flex-col items-center justify-center relative w-full mb-4 '>
                        <h3 className='font-medium text-xl'>Empleado</h3>
                        <div className='flex justify-between m-5'>
                            <form onSubmit={saveOrUpdateEmployee}>
                                <div>
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu nombre" 
                                        name="firstName" 
                                        className='border border-black rounded-lg ml-3'
                                        value={firstName} 
                                        onChange={changeFirstNameHandler} 
                                    />
                                </div>
                                <div>
                                    <label>Apellido</label>
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu apellido" 
                                        name="lastName" 
                                        className='border border-black rounded-lg ml-3'
                                        value={lastName} 
                                        onChange={changeLastNameHandler} 
                                    />
                                </div>
                                <div>
                                    <label>Correo</label>
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu correo" 
                                        name="email" 
                                        className='border border-black rounded-lg ml-6'
                                        value={email} 
                                        onChange={changeEmailHandler} 
                                    />
                                </div>
                                <div className='flex justify-between mt-3'>
                                    <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full'>Guardar</button>
                                    <button type="button" className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full' onClick={cancel}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default CreateOrUpdateEmployee;