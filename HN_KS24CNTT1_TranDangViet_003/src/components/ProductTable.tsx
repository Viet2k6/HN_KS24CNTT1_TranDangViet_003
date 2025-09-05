import ProductRow from "./ProductRow";
import type { Product } from "../types/product";

interface Props {
    products: Product[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ProductTable({ products, onToggle, onDelete }: Props) {
    return (
        <table
            style={{width: "100%"}}>
            <thead>
                <tr>
                    <th style={{ width: "15%", textAlign: "left", padding: "12px" }}>
                        Tên Sản Phẩm
                    </th>
                    <th style={{ width: "20%", textAlign: "center", padding: "12px" }}>
                        Giá
                    </th>
                    <th style={{ width: "20%", textAlign: "center", padding: "12px" }}>
                        Trạng Thái
                    </th>
                    <th style={{ width: "20%", textAlign: "center", padding: "12px" }}>
                        Hành Động
                    </th>
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

