import React, { Component } from 'react';

import './App.css';
import HomeScreen from './Screens/Home/index'
import CourseDetailScreen from './Screens/Detail';
import SignupScreen from './Screens/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Layouts/Header';
import SigninScreen from './Screens/Signin';
import {connect} from 'react-redux'
import { createAction } from './Redux/Actions';
import { DANG_NHAP } from './Redux/Actions/type';


class App extends Component {
  render(){ return (
    <BrowserRouter>
    <Header/>
    
      <Switch>

        <Route path="/detail/:courseId" component={CourseDetailScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" component={HomeScreen} />
        <Route path="/demo-react-elearning" component={HomeScreen} />

      </Switch>


    </BrowserRouter>

  )}
  //Mới vào kiểm tra local của máy có lưu LocalStorage nếu có đẩy lên store
  _getCredentialFromLocal =()=>{
      const credentialsStr = localStorage.getItem('user')
      if(credentialsStr){
        this.props.dispatch(
          createAction(DANG_NHAP, JSON.parse(credentialsStr))
        )
      }
  }
  componentDidMount(){
    this._getCredentialFromLocal()
  }
 
}

export default connect() (App);
