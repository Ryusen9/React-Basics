function List2() {
    const people = [
        { name: "John Doe", address: "123 Main St, Springfield", age: 28 },
        { name: "Jane Smith", address: "456 Oak Ave, Greenfield", age: 34 },
        { name: "Sam Johnson", address: "789 Pine Rd, Lakeside", age: 42 }
    ];
    return (
    <div>Person Info
        {people.map(({name, address, age}) => (
            <ul key={Math.random()}  className="flex flex-col gap-3 border-2 mt-4 w-4/5 mx-auto p-3">
                <li>Name: {name}</li>
                <li>Address: {address}</li>
                <li>Age: {age}</li>
            </ul>
        ))}
    </div>
    )
}

export default List2