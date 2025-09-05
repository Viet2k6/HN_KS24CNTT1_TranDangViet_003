import {Typography} from "antd";

const {Title} = Typography;

export default function Header(){
    return (
        <div 
        style={{
            background: "#1678ff",
            padding: "70px ",
            textAlign: "center",
            borderRadius: " 0 0 12px 12px",
            color:"White",
        }}
        >
            <Title level={2} style ={{color: "white", margin:0}}>
                Quản lý sản phẩm
            </Title>
        </div>
    );
}