import { React } from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router';

function Notfound(props) {
    const history = useHistory();
    console.log(history);
    const Goback = () => {
        history.push('/');
    }
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="không tìm thấy trang phù hợp"
                extra={<Button type="ghost" onClick={Goback}>Quay lại</Button>}
            />
        </>
    )
}

export default Notfound;