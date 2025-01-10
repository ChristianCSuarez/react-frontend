import Layout from "./Layout";
import BackButton from "./BackButton";

function NotFound () {
    return (
        <Layout>
            <p className='font-medium text-xl'>Página no encontrada</p>
           <BackButton />
        </Layout>
    )
}

export default NotFound