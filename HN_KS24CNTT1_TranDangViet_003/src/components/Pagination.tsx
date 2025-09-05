import { Pagination } from 'antd';

interface Props {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
}

export default function CustomPagination({ current, pageSize, total, onChange }: Props) {
    return (
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
            <Pagination
                current={current}
                pageSize={pageSize}
                total={total}
                onChange={onChange}
                showSizeChanger
                pageSizeOptions={['5', '10', '20', '50']}
            />
        </div>
    );
}