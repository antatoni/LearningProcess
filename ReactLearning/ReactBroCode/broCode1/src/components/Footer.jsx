

const Footer = () => {
    return (
        <footer>
            <p>
                &copy; {`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`} Your website footer
            </p>
        </footer>
    )
}

export default Footer;