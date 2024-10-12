import { useState } from "react"

const UseState = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);
    const [friends, setFriends] = useState(['Avocado', 'Mango'])
    const addOneFriend = () => setFriends([...friends, "Banana"])
    return (
        <div>
            {/* <h1>{count}</h1>
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={decrement}>-</button> */}
            {friends.map((f) => {
                <li key={Math.random()}>{f}</li>
            })}
            <button className="btn" onClick={addOneFriend}>Add new Friend</button>
        </div>
    )
}

export default UseState