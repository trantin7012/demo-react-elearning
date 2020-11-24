import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItems'
import { connect } from 'react-redux'
import slide1 from '../../img/slide/khoahoc1.jpg'
import slide2 from '../../img/slide/khoahoc2.jpg'
import slide3 from '../../img/slide/khoahoc3.jpg'
import { fetchCourses } from '../../Redux/Actions/course';



class HomeScreen extends Component {
    render() {
        return (
            <div>
                


                <div className="container" >
                    <h3 className=" display-4 text-center">Danh Sách Khóa Học</h3>
                    <div className="row">
                        {/* có bao nhiêu khóa xuất ra , bỏ dữ liệu item vào CoursesItem */}
                        {
                            this.props.courseList.map((item, index) => <div className="col-3">
                                <CourseItem item={item} />
                            </div>)
                        }

                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        //axios return promise ES6
        this.props.dispatch(fetchCourses())
    }
}
//Lấy dữ liệu trên store ra xài
const mapStateToProps = state => ({
    courseList: state.course.courses
});
export default connect(mapStateToProps)(HomeScreen);
