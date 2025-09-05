import {useState} from 'react';
import { Input, Button, Checkbox, Space } from 'antd';
import type { Product } from '../types/product';

interface Props {
    onAdd: (product: Product) => void;
}

export default function ProductForm({ onAdd }: Props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number | null>(null);
    const [inStock, setInStock] = useState(true);

    const handleSubmit = () => {
        if (!name || !price) {
            return;
        }
        const newProduct: Product = {
            id: Date.now(),
            name,
            price,
            inStock,
            marked: false,
        };
        onAdd(newProduct);
        setName('');
        setPrice(null);
        setInStock(true);
    };
    return (
        <Space style={{ marginBottom: 16 }}>
            <Input
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                placeholder="Giá"
                type="number"
                value={price ?? ''}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <Checkbox
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
            >
                Còn Hàng
            </Checkbox>
            <Button type="primary" onClick={handleSubmit}>
                Thêm 
            </Button>
        </Space>
    );
}