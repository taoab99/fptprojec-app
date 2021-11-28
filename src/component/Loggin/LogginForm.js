import { React } from 'react';
import '../../Sass/index.sass';
import { Form, Input, Button } from 'antd';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { singinUser } from '../../app/SliceReducer/UserLoginSlice';
import Notification from '../notification/Notification';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

export default function LogginForm() {
    const history = useHistory();
    console.log(history);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const { email, password } = values;
        loginForm(email, password);
        form.resetFields();
    };

    const onFinishFailed = (erro) => {
        console.log('Failed:', erro);
    };
    const onFieldsChange = (hangedFields, allFields) => {
        console.log(allFields);
    }

    const loginForm = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (respons) => {
                const user = await respons.user;
                const tk = user.email;
                const actions = singinUser(tk);
                dispatch(actions);
                await Notification();
                history.push('/')
            })
            .catch(err => {
                const message = err.message
                Notification('error', 'thông báo', message)
            })
    };

    const createUser = () => {
        form.validateFields()
            .then(async (respon) => {
                const { email, password } = respon;
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(async (respons) => {
                        await console.log(respons);
                    })
                    .catch((err) => {
                        const message = err.message;
                        Notification('error ', 'thông báo', message);
                    })
                form.resetFields();
            })
            .catch(err => {
                console.log(err);
            })




    }

    return (
        <div className="Formcreate">
            <h2>Đăng nhập / Tạo tài khoản</h2>
            <Form
                name="basic"
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                preserve={false}
                labelAlign="left"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onFieldsChange={onFieldsChange}
                scrollToFirstError={true}
            >
                <Form.Item
                    label="nhập email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'chưa điền thông tin',
                        },
                        {
                            whitespace: true, message: "không thể là khoảng trắng"
                        },
                        {
                            min: 7, message: "tối thiểu 7 kí tự"
                        },
                        { type: 'email', message: 'vui lòng nhập đúng định dạng mail' }
                    ]}
                    hasFeedback
                >
                    <Input placeholder="nhập email" />
                </Form.Item>

                <Form.Item
                    label="nhập mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'chưa điền thông tin',
                        },
                        {
                            whitespace: true, message: "không thể là khoảng trắng"
                        },
                        {
                            min: 7, message: "tối thiểu 7 kí tự"
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="nhập mật khẩu" />
                </Form.Item>

                <Form.Item
                    label="nhập lại mật khẩu"
                    name="repassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'chưa điền thông tin',
                        },
                        {
                            whitespace: true, message: "không thể là khoảng trắng"
                        },
                        {
                            min: 7, message: "tối thiểu 7 kí tự"
                        },
                        ({ getFieldValue }) => ({
                            validator: (_, value) => {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('mật khẩu không trùng khớp')
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="nhập lại mật khẩu" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                >
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={
                        { span: 24 }
                    }
                >
                    <Button type="primary"
                        htmlType="submit"
                    >
                        Đăng nhập
                    </Button>
                    <Button type="link"
                        onClick={createUser}
                    >
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}