import { notification } from 'antd';

export default function Notification(
    type = 'success',
    message = "thông báo",
    description = "nội dung",
    duration = 4,
    top = 60
) {
    notification[type]({
        message,
        description,
        duration,
        top
    });
}