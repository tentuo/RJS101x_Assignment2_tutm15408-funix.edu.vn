import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, Routes } from 'react-router-dom';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import About from './AboutComponent';
import StaffList from './StaffListComponent';
import DptList from './DptListComponent';
import BangLuong from './BangLuong';
import Nvchitiet from './Nvchitiet';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        staff: STAFFS,
        dpt: DEPARTMENTS,
        selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes}
              promotion={this.state.promotions}
              leader={this.state.leaders}
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route exact path='/nhanvien' component={() => <StaffList dish={this.state.staff}/>} />
              <Route exact path='/phongban'>
                <DptList />
              </Route>
              <Route exact path='/nhanvien/:nvId'>
                <Nvchitiet />
              </Route>
              <Route exact path='/bangluong' component={() => <BangLuong dish={this.state.staff} onClick={(dishId) => this.onDishSelect(dishId)} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
