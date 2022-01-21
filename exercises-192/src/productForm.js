function ProductForm(props) {
    const { list, setProducts, fields, setFormFields } = props;
    const { id, name, category, price } = fields;

    function handleChange(e) {
        setFormFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const index = list.findIndex(p => p.id === id);
        if (index > -1) {
            list.splice(index, 1, fields);
            console.log(list);
            setProducts(list);
        } else {
            list.push({ 
                id: parseInt(list.length+1), 
                name: name, 
                category: category, 
                price: parseInt(price) });
            console.log(list);
            setProducts(list);
        }
        
    }

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <label>
                Name
                <input type='text' name='name' value={name} />
            </label>
            <br />
            <label>
                Category
                <input type='text' name='category' value={category} />
            </label>
            <br />
            <label>
                Price
                <input type='text' name='price' value={price} />
            </label>
            <br />
            <label>
                <input type='submit' value='Add/Edit' />
            </label>
        </form>
    );
}

export default ProductForm;