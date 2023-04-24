import React, { useContext } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
import Header from '../Pages/Shared/Header/Header';
import RightSide from '../Pages/RightSideNav/RightSideNav'
import { useState } from 'react';
import { DarkModeContext } from '../Pages/theme/theme';

const Main = () => {
    const { darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? 'dark' : ''}>
          
            <Header />
            <Container  >
               <Row>
                <Col lg="2" >
                  <LeftSideNav/>
                </Col>
               <Col lg="7" >
               <Outlet ></Outlet>
               </Col>
               <Col lg="3">
              <RightSide/>
               </Col>
               
               </Row>   
            </Container>
      
     
        </div>
    );
};

export default Main;