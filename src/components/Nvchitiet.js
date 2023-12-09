import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DISHES } from "../shared/dishes"
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Nvchitiet() {
    const {nvId} = useParams();
    const thists = STAFFS.find(nhanvie => nhanvie.id == nvId);

    return(
        <div className="col-12 col-md-5 m-1">
            <div><Link to="/nhanvien">Nhân Viên</Link> / {thists.name}</div>
            <br/><hr/>
            <CardImg src={thists.image} />
            <CardText>Họ và tên: {thists.name} </CardText>
            <CardText>Ngày sinh: {thists.doB} </CardText>
            <CardText>Ngày vào công ty: {thists.startDate} </CardText>
            <CardText>Phòng ban: {thists.department.name} </CardText>
            <CardText>Số ngày nghỉ còn lại: {thists.annualLeave} </CardText>
            <CardText>Số ngày đã làm thêm: {thists.overTime} </CardText>
        </div>
    );
}

export default Nvchitiet;

