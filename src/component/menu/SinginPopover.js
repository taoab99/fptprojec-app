import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import { singinUser } from '../../app/SliceReducer/UserLoginSlice';
import { useDispatch } from 'react-redux';
import Notification from '../notification/Notification';

export default function SinginPopover(props) {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const logout = () => {
        firebase.auth().signOut().then(() => {
            const actions = singinUser(null);
            dispatch(actions);
            Notification('success', 'đăng xuất thành công');

        }).catch((error) => {
            const message = error.message;
            Notification('error', message);
        });
    }
    if (user) {
        return (
            <div>
                <div className="singinform">
                    <Link to="/" onClick={logout}>Đăng xuất</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="singinform">
            <Link to="/login">Đăng nhập</Link>
            <Link to="/login">Tạo tài khoản</Link>
        </div>
    )
}