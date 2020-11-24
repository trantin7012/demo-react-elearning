import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
//thư viện yup định nghĩa thuộc tính kết hợp với formik

import { userService } from '../../Services'
import { signupUserSchema } from '../../Services/course';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';


class SignupScreen extends Component {


    _handleSubmit = values => {
        userService.signUp(values)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đăng ký thàng công',
                    showConfirmButton: false,
                    timer: 1200
                })
                this.props.history.push('/signin')
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: err.response.data,
                    showConfirmButton: false,
                    timer: 1200
                })
            });
    };
    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Đăng Kí</h1>
                <Formik
                    //Nhận vào giá trị ban đầu 
                    initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                        maNhom: "GP01"
                    }}
                    validationSchema={signupUserSchema}
                    //Chạy hàm
                    onSubmit={this._handleSubmit}
                    //formikProps chứa sẵn những hàm như onchage.. để xử lý form

                    render={(formikProps) => (
                        <Form  >
                            <div className="form-group">
                                {/* <label>Tài Khoản:</label> */}
                                {/* name tương ứng với giá trị initialValues ban đầu  */}
                                {/* <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} /> */}
                                <TextField id="outlined-basic" label="Tài Khoản" variant="outlined" name="taiKhoan" onChange={formikProps.handleChange}  style={{width:"100%"}}/>
                                <ErrorMessage name="taiKhoan">{msg => <div className="alert alert-danger"> {msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                {/* <label>Mật Khẩu</label> */}
                                {/* <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} /> */}
                                <TextField id="outlined-password-input" label="Mật Khẩu" type="password" autoComplete="current-password" name="matKhau" variant="outlined" onChange={formikProps.handleChange} style={{width:"100%"}} />
                                <ErrorMessage name="matKhau">{msg => <div className="alert alert-danger"> {msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                {/* <label>Họ Tên:</label> */}
                                {/* <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} /> */}
                                <TextField id="outlined-basic" label="Họ Tên" variant="outlined" name="hoTen" onChange={formikProps.handleChange} style={{width:"100%"}}/>
                                <ErrorMessage name="hoTen">{msg => <div className="alert alert-danger"> {msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                {/* <label>Email:</label> */}
                                {/* <Field type="email" className="form-control" name="email" onChange={formikProps.handleChange} /> */}
                                <TextField id="outlined-basic" label="Email" type="email" variant="outlined" name="email" onChange={formikProps.handleChange}style={{width:"100%"}} />
                                <ErrorMessage name="email">{msg => <div className="alert alert-danger"> {msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                {/* <label>Số ĐT:</label> */}
                                {/* <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} /> */}
                                <TextField id="outlined-basic" label="Số ĐT" variant="outlined" name="soDT" onChange={formikProps.handleChange} style={{width:"100%"}} />
                                <ErrorMessage name="soDT">{msg => <div className="alert alert-danger"> {msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                {/* <label>Mã Nhóm</label> */}
                                {/* <Field component="select" className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                    </Field> */}
                                <TextField  style={{width:"100%"}}
                                    id="outlined-select-currency-native"
                                    select
                                    label="Mã Nhóm"
                                    name="maNhom"
                                    onChange={formikProps.handleChange}

                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Chọn mã nhóm"
                                    variant="outlined"
                                >
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
          )
        </TextField>

                            </div>
                            <div className="text-left">
                                {/* Khi bấm nút SubMit sẽ chạy hàm Submit */}
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </Form>
                    )} />


            </div>
        )
    }
}
export default SignupScreen;
