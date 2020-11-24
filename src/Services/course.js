import Axios from 'axios'
import * as yup from "yup"
export const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Field is required!"),
    matKhau: yup.string().required("*Field is required!"),
    hoTen: yup.string().required("*Field is required!"),
    email: yup.string().required("*Field is required!").email("*Email is required!"),
    soDT: yup.string().required("*Field is required!").matches(/^[0-9]+$/),
    maNhom: yup.string().required("* Field is required!")
});
class CourseService{
    fetchCourses(){
     return   Axios({

            method: 'GET',
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05"
        })
    }
    fetchCoursesDetail(id){
        return   Axios({

            method: 'GET',
            //chuyển stringtemp để truyền tham số
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
        })
    }
    dangKyCourse (data,token){
        return Axios({
            url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
            method : 'POST',
            data,
            headers : {'Authorization': `Bearer ${token}`}
        })
    }
}
export default CourseService