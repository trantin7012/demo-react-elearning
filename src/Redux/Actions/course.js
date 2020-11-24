import { createAction } from ".";
import { courseService } from "../../Services";
import { KHOA_HOC, CHI_TIET_KHOA_HOC } from "./type";


//async action
export const fetchCourses = () => {
    //nhận vào tham số dispatch
    return dispatch => {
        courseService
            .fetchCourses()
            // Lấy dữ liệu API bỏ vào Store để render khóa học ra
            .then(res => {
                // xong dispatch lên store
                dispatch(createAction(KHOA_HOC, res.data));

            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const fetchCoursesDetail = (id)=>{
     return dispatch =>{
        courseService.fetchCoursesDetail(id)
        .then(res => {
             dispatch(createAction(CHI_TIET_KHOA_HOC,res.data));
         }).catch(err => {
             console.log(err)
         })
     }
}
