import http from "../http-common";
import { Product } from "../types/Product";

function getAll() {
    return http.get<Array<Product>>(`/products`);
}

function get(id: number) {
    return http.get<Product>(`/products/${id}`);
}

function create(item: Product) {
    return http.post<Product>('/products', item);
}

function update(id: number, data: Product) {
    return http.put<any>(`/products/${id}`, data);
}

function remove(id: number) {
    return http.delete<any>(`/products/${id}`);
}

const ProductService = {
    getAll,
    get,
    create,
    update,
    remove,
}

export default ProductService;