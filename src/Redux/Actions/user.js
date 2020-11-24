import { createAction } from "."
import { userService } from "../../Services"
import { DANG_NHAP } from "./type"
import Swal from 'sweetalert2'
export const login = (user)=>{
    return dispatch =>{
        //thực hiện lấy API
        userService.signIn(user)
        //dispatch action và lưu res.date lưu trên store
        .then (res=>{
            localStorage.setItem('user',JSON.stringify(res.data))
            dispatch(createAction(DANG_NHAP ,res.data));
            //lưu trên localStorage 
            
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1200
            });
        })
        .catch(err=>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data,
                showConfirmButton: false,
                timer: 1200
            });
        return false
        })
    }
}