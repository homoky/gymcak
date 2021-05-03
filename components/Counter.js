import { useState } from 'react'

const Counter = ({defaultValue =0 , incrementor = 1}) => {
    const [increment, setIncrement] = useState(defaultValue)

    return <div>Počítadlo: {increment} <button onClick={()=>setIncrement(increment + incrementor)}>Zvýšit</button></div>
}

export default Counter