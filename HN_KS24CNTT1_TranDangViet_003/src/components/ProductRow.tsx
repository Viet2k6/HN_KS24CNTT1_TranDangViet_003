import { Button, Tag } from 'antd';
import type { Product } from '../types/product';

interface Props {
    product: Product;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ProductRow({ product, onToggle, onDelete }: Props) {
    return (
        <tr>
            <td style={{
                    padding: "12px",
                    textAlign: "left",
                    textDecoration: product.inStock ? "none" : "line-through"
                }}
            >
                {product.name}
            </td>
            <td style={{
                    padding: "12px",
                    textAlign: "center",
                    color: "#16a34a",
                    fontWeight: "600"
                }}
            >
                {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND"
                })}
            </td>
            <td style={{ padding: "12px", textAlign: "center" }}>
                {product.inStock ? (
                    <Tag color="green">Còn Hàng</Tag>
                ) : (
                    <Tag color="red">Hết Hàng</Tag>
                )}
            </td>
            <td style={{ padding: "12px", textAlign: "center" }}>
                <Button
                    style={{ borderColor: "blue", color: "blue" }}
                    onClick={() => onToggle(product.id)}>Đánh dấu</Button>
                <Button style={{ marginLeft: 8, borderColor: "red", color: "red" }} 
                onClick={() => onDelete(product.id)}>Xóa</Button>
            </td>
        </tr>
    );
}
