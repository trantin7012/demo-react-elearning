const { DANG_NHAP } = require("../Actions/type");

let initialState ={
    //credentials là thông tin đăng nhập ban đầu rỗng
    credentials :null
}
//bỏ action dữ liệu vào credentials ban đầu là null
const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case DANG_NHAP:
            state.credentials =action.payload
            return{...state};
        default:
            return state;
    }
}   
export default UserReducer;