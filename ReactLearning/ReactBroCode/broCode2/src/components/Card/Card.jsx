const Card = () => {
    const cardStyle = {
        border: `1px solid rgb(124, 124, 124)`,
        borderRadius: `10px`,
        boxShadow: `5px 5px 5px hsla(0, 0%, 0%, 0.106)`,
        padding: `20px`,
        margin: `10px`,
        textAlign: `center`,
        maxWidth: `250px`,
        display: `inline-block`
    }

    const cardImageStyle = {
        maxWidth: `60%`,
        height: `auto`,
        borderRadius: `50%`,
        marginBottom: `10px`,

    }

    const cardTitleStyle = {
        fontFamily: `Arial, sans-serif`,
        margin: `0`,
        color: `rgb(100, 99, 99)`,
    }

    const cardDescTitle = {
        fontFamily: `Arial, sans-serif`,
        color: `hsla(0, 0%, 0%, 0.523)`
    }

    const cardButtonStyle = {
        backgroundColor: `hsl(200, 100%, 50%)`,
        color: `white`,
        padding: `10px 20px`,
        borderRadius: `5px`,
        border: `none`,
        cursor: `pointer`,
    }
    return (
        <div style={cardStyle}>
            <img style={cardImageStyle} alt="profile picture" src="https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-1/62342886_2179935922091077_3647331123056345088_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3Cd6GGL5FkEQ7kNvwH8xv45&_nc_oc=AdnIUNu4E_nbhW1XplC5NdRbxuXC6ozlBkJ3KY24GRgfIl1RO3XOD33tYvPOFKbVJQBSrDQD8u3kxTTFWi1_LfNx&_nc_zt=24&_nc_ht=scontent.fsof10-1.fna&_nc_gid=Aif5gIrxe0k0dktXwDjRiQ&oh=00_AfE9F3mIAlyKi1JuBM6j1ExpL2-SDhrDqQrh4kvmhaNowA&oe=683085D0"></img>
            <h2 style={cardTitleStyle}>Antani Kalchev</h2>
            <p style={cardDescTitle}>I'm a student , studying Javascript and anything frontend</p>
            <button style={cardButtonStyle}>Click me !</button>
        </div>
    )
}


export default Card;