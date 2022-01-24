import { List } from "antd";
import { Link } from 'react-router-dom';

import { Product } from "./Products";

type Props = {
    list: Array<Product>,
}

function ProductsList(props: Props) {
    const { list } = props;
    const formattedList = list.map((item) => 
    <List.Item key={item.id}>
        <Link to={`/product/${item.id}`}>
            {item.name}
        </Link>
    </List.Item>
    );
    return (
        <List>
            {formattedList}
        </List>
    );
}

export default ProductsList;