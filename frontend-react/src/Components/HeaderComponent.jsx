import { NavLink } from "react-router-dom";
const HeaderComponent = () => {

    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light'>
                <ul className='flex items-center gap-3'>
                    <li className='font-semibold text-lg'>
                        <NavLink to="/" 
                            className={({ isActive }) =>
                            isActive ? activeStyle: undefined
                            }>
                            Administrador de Empleados
                        </NavLink>
                    </li>
                    <li className='font-semibold text-lg'>
                        <NavLink to="/add-employee/-1"
                            className={({ isActive }) =>
                            isActive ? activeStyle: undefined
                            }>
                            Agrega un empleado
                        </NavLink>
                    </li>
                </ul>
        </nav>
    );
}
export default HeaderComponent;