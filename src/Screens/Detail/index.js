import React, { Component } from 'react'
// import '../../scss/CourseDetailScreen.scss'
import { connect } from 'react-redux'

import { fetchCoursesDetail } from '../../Redux/Actions/course';

import { Fade } from 'react-reveal';
import { courseService } from '../../Services';


class CourseDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            err: "",
            hoTenNguoiTao: ""
        }


    }

    // kt = (danhSachKhoaHocDaGhiDanh, maKhoaHoc) => {
    //     console.log(danhSachKhoaHocDaGhiDanh, maKhoaHoc);
    //     const hopLe = danhSachKhoaHocDaGhiDanh?.find(item => item.maKhoaHoc == maKhoaHoc)
    //     if (hopLe) {
    //         return true
    //     } else {
    //         return false
    //     }

    // }

    registerCourse=(maKhoaHoc,taiKhoan)=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            const data ={
                maKhoaHoc,
                taiKhoan:user.taiKhoan
            }
            courseService.dangKyCourse(data, user.accessToken)
            .then(res=>{
                console.log(res)
                const err = "Đăng ký thành công"
                this.setState({ err })
            }).catch(errs=>{
                var err = "Khóa học này đã được ghi danh"


                console.log(errs.message);
                this.setState({ err })
            })
        }else{
            console.log('Chưa Đăng Nhập')
            var err = "Vui lòng đăng nhập để ghi danh"
            this.setState({ err })
        }
    }

    render() {
        return (
            <div className="container">
                <Fade top>
                <div className="row">
                {this.state.err ?
                            <div className="alert alert-danger" style={{ width: "90%" }}>{this.state.err}</div> :
                            ""
                        }
                    <div className="col-4 image mt-5 pt-5">
                <img src={this.props.courseDetail.hinhAnh} style={{ width: "100%", height: 200 }} alt="course detail" />
                </div>
                    <div className="col-6 mt-5 pt-5">
                <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
                
                <button onClick={()=>this.registerCourse(this.props.match.params.courseId, this.state.user.taiKhoan)} className="btn btn-outline-success py-2 mr-auto">Đăng ký</button>
                </div>
                </div>
                <div>
                    <h3 >Mô tả khóa học</h3>
                    <p>{this.props.courseDetail.moTa}</p>
                </div>
                </Fade>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch(fetchCoursesDetail(this.props.match.params.courseId))
    }
}
const mapStateToProps = (state) => ({
    //Lần đầu lấy dữ liệu sẽ là null nên phai hoặc object nếu không sẽ lỗi
    courseDetail: state.course.courseDetail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        nguoiTao: {
            taiKhoan: '',
            hoTen: ''
        }
    }
});
export default connect(mapStateToProps)(CourseDetailScreen);
