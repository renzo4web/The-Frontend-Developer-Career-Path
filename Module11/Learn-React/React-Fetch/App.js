import React from 'react'

const App = () => {

    const [data, setData] = useState({
        loading:true,
        character: null,
        count:1
    })

    useEffect(async() => {

        const res =  await fetch("https://swapi.dev/api/people/1/")
        const body = await res.json()

        console.log(body);

    }, [data])


    const handleClick = () => {
        
        setData({count: count+1})
        
    }

    return (
        <>
        <div>
            {
               data.loading ? "Loading..." :   JSON.stringify(data.character)
            }
        </div>
        <button onClick={handleClick}></button>
        </>
    )
}

export default App
