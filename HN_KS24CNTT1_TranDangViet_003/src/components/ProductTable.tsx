import ProductRow from "./ProductRow";
import type { Product } from "../types/product";

interface Props {
    products: Product[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ProductTable({ products, onToggle, onDelete }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow
                        key={product.id}
                        product={product}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    );
}