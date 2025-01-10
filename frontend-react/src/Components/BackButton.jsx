import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function BackButton () {

    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center bg-blue-600 rounded-lg px-3'>
                <ChevronLeftIcon className="size-6 text-black cursor-pointer" />
                <button 
                    onClick={()=>{navigate('/')}}
                    >Atrás
                </button>
        </div>
    )
}

export default BackButton