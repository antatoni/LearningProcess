
const ProfilePicture = () => {

    const data = `https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/62342886_2179935922091077_3647331123056345088_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3Cd6GGL5FkEQ7kNvwHSd76E&_nc_oc=Adn5LYTyTuq0ZqXVhNjyj4oFa5KUJ_OI08BM1nnS6HwMQxBx0tuWQ1psriN5R3-H8wOvZDfDHqptiKqnh9oE1xDa&_nc_zt=23&_nc_ht=scontent.fsof10-1.fna&_nc_gid=7TZ4gI_PnuufvOqme4dToA&oh=00_AfFNXGhJiyoksoEw3ffYAmS0cPD8_09hyc0pnDsEBhJtoQ&oe=6831EEC6`
    const handleClick = (e) => e.target.style.display = 'none';
    return (
        <>
            <img onClick={(e) => handleClick(e)} src={data} style={{ width: '300px', heigth: '300px' }}></img >
        </>
    )

}

export default ProfilePicture