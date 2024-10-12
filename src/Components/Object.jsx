function Object() {
    const product = {
        productName: 'Avocado',
        price: 99.66,
        availability: 'In stock',
    }
    return (
        <div className="text-2xl">
            <h1>Product</h1>
            <p>Name: {product.productName}</p>
            <p>Price: {product.price}$</p>
            <p>Availability: {product.availability}</p>
        </div>
    )
}

export default Object