import { useState, useEffect} from 'react';
import { Card, Typography } from 'antd';
import Header from './Header';
import ProductFormCard from './ProductFormCard';
import ProductTable from './ProductTable';
import CustomPagination from './Pagination';
import type { Product } from '../types/product';
import { saveProducts, loadProducts } from '../types/storage';

const { Title } = Typography;

export default function ProductManager() {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    useEffect(() => {
        setProducts(loadProducts());
    }, []);

    useEffect(() => {
        saveProducts(products);
    }, [products]);

    const addProduct = (product: Product) => {
        setProducts([...products, product]);
        setCurrentPage(1);
    };

    const toggleProduct = (id: number) => {
        setProducts(
            products.map((product) =>
                product.id === id ? { ...product, inStock: !product.inStock } : product
            )
        );
    };
    
    const deleteProduct = (id: number) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginationProducts = products.slice(startIndex, endIndex);

   return (
    <div>
        <Header />
        <div style={{padding: 20}}>
            <ProductFormCard onAdd={addProduct}/>
            <Card>
                <Title level={4}>Danh Sách Sản Phẩm</Title>
                <ProductTable products={paginationProducts} onToggle={toggleProduct} onDelete={deleteProduct} />
                <div style ={{marginTop: 8, textAlign: 'right'}}>
                    <span>Tổng: {products.length} sản phẩm</span>
                    <CustomPagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={products.length}
                        onChange={(page, size) => {
                            setCurrentPage(page);
                            setPageSize(size);
                        }}
                    />
                </div>
            </Card>
        </div>
    </div>
);
}