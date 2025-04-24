import PropTypes from 'prop-types';
const UserGreeting = ({ IsLoggedIn = false, username = 'Guest' }) => {

    const welcomeMessage = <h2 className='welcome-message'>Welcome {username}</h2>;
    const loginPrompt = <h2 className='log-in-prompt'>Please log in to continue</h2>
    return IsLoggedIn ? welcomeMessage : loginPrompt
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting