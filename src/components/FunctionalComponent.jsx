import React, { useState , useEffect} from 'react'

function FunctionalComponent() {

    const [ date, setDate ] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <div>
            <h1>it is functional component</h1>   
            <h2>it is {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default FunctionalComponent
