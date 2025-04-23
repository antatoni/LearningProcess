import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
    return (
        // <button style={{ backgroundColor: color }}>
        // {text}</button>
        // <button onClick={(e) => console.log(text)} 
        // style={{ backgroundColor: color }}>{text}</button>

        <button style={{ backgroundColor: color }}
            onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}
export default Button;