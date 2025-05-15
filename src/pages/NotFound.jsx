import { Link } from "react-router-dom";
import Login from "./Login";


const NotFound = () => {
    return ( 

        <>
            <h1>Endereço não encontrado!</h1>
            <Link to={"/"}>Voltar</Link>
        </>
     );
}
 
export default NotFound;