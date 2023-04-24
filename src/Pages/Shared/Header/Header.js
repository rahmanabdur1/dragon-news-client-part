import React, { useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { DarkModeContext } from '../../theme/theme';



const Header = () => {
 
  const {darkMode,toggleDarkMode }=useContext(DarkModeContext)
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut =()=> {
    logOut ()
    .then( ()=>{

    })
    .catch(error => console.error(error))
  }


  return (
    <Navbar  sticky="top" className={darkMode ? 'dark shadow-sm p-2 mb-3 bg-dark rounded ' : 'light shadow-sm p-2 mb-3 bg-white rounded'}expand="lg" variant='light ' >

        <Container >
            <Navbar.Brand><Link className="text-decoration-none"  to='/'>Dragon News</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='m-3 text-decoration-none ' to='/'>All News</Link> 
                </Nav>
                <Nav  className="d-flex justify-content-center align-items-center">
                    <>
                        {
                            user?.uid ?
                                <>
                                    <span className='m-3 d-flex justify-content-center align-items-center' >{user?.displayName}</span>
                                    <div className="m-3 d-flex justify-content-center align-items-center" >    <Button variant="outline-danger" className="btn-sm "    onClick={handleLogOut}>Log out</Button></div>
                                </>
                                :
                                <>
                                    <Button variant="outline-danger"  className="m-2 d-flex justify-content-center align-items-center"><Link className="text-decoration-none"  to='/login'>Login</Link></Button>
                                    <Button variant="outline-danger" className=" d-flex justify-content-center align-items-center"><Link className="text-decoration-none"  to='/register'>Register</Link></Button>
                                </>
                        }


                    </>
                    <Link to="/profile">
                        {user?.photoURL ?
                            <Image
                            className='m-3 d-flex justify-content-center align-items-center'
                                style={{ height: '40px' }}
                                roundedCircle
                                src={user?.photoURL}>
                            </Image>
                            : <FaUser  className='m-4 d-flex justify-content-center align-items-center'></FaUser>
                        }
                    </Link>
                  <div className='mb-5' 
                  style={{ height: '30px' }}
                       >
                    <Button className='m-3' variant={darkMode ? 'outline-light' : 'dark'} onClick={toggleDarkMode }>
                    {darkMode ? '  outline-Light' : 'Dark'}
                   </Button></div>

                </Nav>
                <div className='d-lg-none'>
                    <LeftSideNav></LeftSideNav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
);

};

export default Header;