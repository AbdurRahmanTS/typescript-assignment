import React, { useState } from 'react';
import Products from './Products';


interface IProduct{
    title : string,
    description: string,
    price: number,
    id: number
}

const Product = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [products, setProducts] = useState<IProduct[]>([])

    const handleProduct = (e:React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name] : e.target.value, id : Math.floor( Math.random()* 1000)})
    }

    const addProduct = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setProducts([...products, product])
        setProduct({
            title : "",
            description: "",
            price: 0,
            id: 0
        })
        e.preventDefault()
    }

    const handleRemove = (id: number) => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
    }

    return (
        <div>
            <h1>Add Product</h1>
            <div className = "form">
                <input value = {product.title} type = "text" name = "title" onChange = {handleProduct} placeholder = "Product Name" required /><br/>
                <input value = {product.description} type = "text" name = "description" onChange={handleProduct} placeholder = "Product Description" required /><br/>
                <input value = {product.price} type = "number" name = "price" onChange = {handleProduct} placeholder = "Product Price" required /><br/>
                <button onClick = {addProduct}>Add</button>
            </div>
            <h1>Product List</h1>
            {
                products.map(product => <Products key = {product.id} title = {product.title} description = {product.description} price = {product.price} id = {product.id} handleRemove = {handleRemove} />)
            }
        </div>
    );
};

export default Product;