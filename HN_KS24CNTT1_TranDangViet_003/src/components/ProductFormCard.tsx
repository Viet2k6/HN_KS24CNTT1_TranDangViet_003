import { Card, Typography } from "antd";
import ProductForm from "./ProductForm";
import type {Product} from "../types/product";

const {Title} = Typography;

interface Props {
    onAdd: (product: Product) => void;
}

export default function ProductFormCard({onAdd}: Props){
    return (
        <Card style = {{ marginTop: 40, marginBottom: 20, textAlign:"center"}}>
            <Title level ={4}>Thêm sản phẩm mới</Title>
            <ProductForm onAdd={onAdd} />
        </Card>
    );
}