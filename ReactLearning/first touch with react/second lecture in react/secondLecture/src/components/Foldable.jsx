import { useState } from "react";

const Foldable = (props) => {
    const [show, setShow] = useState(false);


    return (
        <div style={({ border: `1px solid black`, margin: '10px', padding: '10px' })}>
            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            {show && props.children}
            {/* <p>Secondary:</p>
            {props.component} */}
        </div>
    )
}


export default Foldable;