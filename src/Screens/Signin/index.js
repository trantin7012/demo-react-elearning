import React, { Component } from 'react'
import {Form, Formik ,Field} from 'formik'
//connect kết nối JSX với store
import {connect} from 'react-redux'
import { login } from '../../Redux/Actions/user'


import TextField from '@material-ui/core/TextField';
class SigninScreen extends Component {
    render() {
        return (


            <Formik
            initialValues ={{
                taiKhoan:"",
                matKhau :""
            }}
            //bấm submit gọi hàm login chạy lấy giá trị value từ form
            //vừa lên server vửa lên store
            onSubmit={(values)=>{
               this.props.dispatch(login(values))
               setTimeout(() => {
                const user = JSON.parse(localStorage.getItem('user'))
                if (user) {
                    if (user.maLoaiNguoiDung == "GV") {
                        this.props.history.push('/')

                    } else if (user.maLoaiNguoiDung == "HV") {
                        this.props.history.push('/')
                    }
                }
                else {
                    this.props.history.push('/dangnhap')
                }
            }, 500);
            }}
            render={(formikProps)=>(
                <Form className="w-50  mx-auto">
                <h1>Đăng Nhập</h1>
                <div className="form-group">
                    {/* <label>Tài Khoản</label>
                    <Field type="text" name="taiKhoan" className="form-control" onChange={formikProps.handleChange} /> */}
                    <TextField id="outlined-basic" label="Tài Khoản" variant="outlined" name="taiKhoan" onChange={formikProps.handleChange}/>
                </div>
                <div className="form-group">
                    {/* <label>Mật Khẩu</label>
                    <Field type="password" name="matKhau" className="form-control" onChange={formikProps.handleChange} /> */}  
                     <TextField id="outlined-password-input" label="Mật Khẩu" type="password" autoComplete="current-password" name="matKhau" variant="outlined" onChange={formikProps.handleChange}/>  
                </div>
                <button to="/" className="btn btn-success">Đăng Nhập</button>

            </Form>
            )}
            />
            
        )
    }
}
export default connect() (SigninScreen);
