import { useContext } from "react";
import { UserContext } from "./CompA";
import CompD from "./CompD";
const CompC = () => {

    const user = useContext(UserContext);

    return (
        <div className='box'>
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <CompD></CompD>
        </div>
    )
}

export default CompC;