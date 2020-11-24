import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography';
export default class CourseItem extends Component {
    render() {
        return (
            // <div>
            //   <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="hover col-3 my-3">
            <Card className="card p-2 mb-4">
                
                {/* <img src={this.props.item.hinhAnh} style={{ width: "100%", height: 200 }} />
                <p className="lead font-weight-bold" style={{height:50}}>{this.props.item.tenKhoaHoc} </p>
                <p className="lead">Instructor:{this.props.item.nguoiTao.hoTen}</p>
                <p className="lead">Rating: 5.0</p>
                <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-success">Chi Tiết</Link> */}


      <CardActionArea>
     
        <CardMedia>
        <img src={this.props.item.hinhAnh} style={{ width: "100%", height: 200 }}/>
        </CardMedia>
        <CardContent style={{height:150}}>
          <Typography gutterBottom variant="h5" component="h2" >
          {this.props.item.tenKhoaHoc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          Instructor:{this.props.item.nguoiTao.hoTen}
          </Typography>
        </CardContent>
      
      <CardActions>
      <Link to={`/detail/${this.props.item.maKhoaHoc}`} style={{width:"100%"}} className="btn btn-success">Chi Tiết</Link>
      </CardActions>
      </CardActionArea>
    
             {/* </div> </Link> */}
             </Card>
        )
    }
}
