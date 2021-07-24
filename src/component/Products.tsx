import React from 'react';

interface IProps{
    title : string,
    description: string,
    price: number,
    id: number,
    handleRemove: (id: number) => void
}

const Products = ({title, description, price, id, handleRemove} : IProps) => {
    

    return (            
        <div className = "card">
            <p>
                <strong>Product ID</strong>: {id}
            </p>
            <p>
                <strong>Product Name</strong>: {title}
            </p>
            <p>
                <strong>Product Description</strong>: {description}
            </p>
            <p>
                <strong>Product Price</strong>: ${price}
            </p>
            <button onClick = {() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Products;