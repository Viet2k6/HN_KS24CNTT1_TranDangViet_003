import type { Product } from "./product";

const STORAGE_KEY = "products";

export function saveProducts(products: Product[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function loadProducts(): Product[] {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return []; 
    return JSON.parse(data);
};

