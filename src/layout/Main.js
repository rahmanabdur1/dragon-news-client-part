import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
import Header from '../Pages/Shared/Header/Header';
import RightSide from '../Pages/RightSideNav/RightSideNav'
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               <Row>
                <Col lg="2" className='d-none d-lg-block'>
                  <LeftSideNav/>
                </Col>
               <Col lg="7">
               <Outlet></Outlet>
               </Col>
               <Col lg="3">
              <RightSide/>
               </Col>
               
               </Row>   
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;