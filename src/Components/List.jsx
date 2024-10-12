function List() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            {arr.map((num) => (
                <ul key={num}>
                    <li>{num}</li>
                </ul>
            ))}
        </div>
    )
}

export default List