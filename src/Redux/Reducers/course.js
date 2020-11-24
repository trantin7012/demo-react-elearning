//tạo Reducer cho store
//giá trị ban đầu là rỗng
let initialState = {
    courses: [],
    courseDetail: null

};
//Tạo Reducer , Reducer nhận vào dữ liệu course mặc định là initalState , nhận action từ component trả về state
const CourseReducer = (state = initialState, action) => {
    //dùng switch check action.type
    switch (action.type) {
        //chạy action bên this.prop.dispatch
        case "KHOA_HOC":
            state.courses = action.payload;

            return {
                ...state
            }
        case "CHI_TIET_KHOA_HOC":
            state.courseDetail = action.payload;
            return {
                ...state
            }
        //Mặc định ko chỉnh sửa
        default:
            return state;
    }


}
export default CourseReducer