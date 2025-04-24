import { use, useEffect, useState } from "react"


const DataFetcher = () => {
    const [gifUrl, setGifUrl] = useState(null);

    const [error, setError] = useState(null);

    const fetchGif = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=T7CtG9dY5sGyrovhkchyJXNLCJ4UDGLD`);

            if (!response.ok) {
                throw new Error(`Network response was not ok!`);
            }

            const result = await response.json();
            setGifUrl(result.data.images.original.url)
        }
        catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchGif();
    }, [])

    return (
        <div style={{ margin: '10px', padding: '10px' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {gifUrl && (
                <div>
                    <img src={gifUrl} style={{ width: '300px', height: '300px' }} />
                </div>
            )}
        </div>
    )
}

export default DataFetcher