import { useState } from "react";
import ProductTable from "./productTable";
import ProductForm from "./productForm"; 

function Products() {
    const [products, setProducts] = useState(
        [
            {
                id: 1, 
                name: "Kayak", 
                category: "Watersports", 
                price: 275.89, 
            }, {
                id: 2, 
                name: "Lifejacket", 
                category: "Watersports",
                price: 48.95,
            }, {
                id: 3, 
                name:"Soccer Ball", 
                category: "Soccer", 
                price: 19.50,
            }, {
                id: 4,
                name: "Corner Flags",
                category: "Soccer", 
                price: 34.95,
            }, {    
                id: 5, 
                name: "Bling Bling King", 
                category: "Chess", 
                price: 79500,
            }
        ]
    );
    const [formFields, setFormFields] = useState({
        id: 100,
        name: '',
        category: '',
        price: '',
    });

    const list = products.slice();

    return (
        <>
            <div className="products">
                <ProductTable list={list} setProducts={setProducts} setFormFields={setFormFields}/>
                <ProductForm list={list} setProducts={setProducts} fields={formFields} setFormFields={setFormFields} />
            </div>
        </>
    );
}

export default Products;