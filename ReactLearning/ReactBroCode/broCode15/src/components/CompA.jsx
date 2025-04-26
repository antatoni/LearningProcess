import { useState, createContext } from "react";
import CompB from "./CompB";

export const UserContext = createContext();
const CompA = () => {

    //passing props from Outermost component to one of the innermost ,
    //is called prop's drilling ! 

    const [user, setUser] = useState('TonyJeto');
    return (
        <div className='box'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <CompB></CompB>
            </UserContext.Provider>
        </div>
    )
}

export default CompA;