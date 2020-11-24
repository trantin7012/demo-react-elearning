import UserService from "./user"
import CourseService from "./course"
//đổi hàm thành biến để gọi
export const userService = new UserService();
export const courseService = new CourseService();