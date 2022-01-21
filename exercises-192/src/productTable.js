function ProductTable(props) {
    const { list, setProducts, setFormFields } = props
    
    const tableHeader = (
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    );
    
    const tableContent = list.map((item) =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td><button onClick={(e) => handleDelete(item.id)}>Delete</button> <button onClick={(e) => handleFormFill(item)}>Edit</button></td>
        </tr>
    );

    function handleDelete(id) {
        list.splice(list.findIndex(p => p.id === id), 1);
        setProducts(list);
    }

    function handleFormFill(item) {
        setFormFields(item);
    }

    return (
        <table>
            <thead>
                {tableHeader}
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
    );
}

export default ProductTable;