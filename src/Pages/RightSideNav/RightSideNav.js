import React, { useContext } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub,FaFacebook,FaWhatsapp} from "react-icons/fa"
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
 
  const {providerLogin} =useContext(AuthContext);

  const googleProvider =new GoogleAuthProvider()
  const handleGoogleSignIn =()=>{
    providerLogin(googleProvider)
    .then(result =>{
      const user =result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }
 
    return (
      <div style={{ position: 'fixed',}}> 
      <ButtonGroup vertical >
      <Button className='mt-3' onClick={handleGoogleSignIn}  variant='outline-primary'><FaGoogle></FaGoogle>Login width Google</Button>
      <br/>
      <Button variant='outline-primary' className='mb-4' ><FaGithub></FaGithub>Login width Github</Button>
      </ButtonGroup>
      <div >
        <h5>Find us on</h5>
      <div   >
      <ListGroup  >
      <ListGroup.Item  className="mb-2"><FaFacebook></FaFacebook> Cras justo odio</ListGroup.Item>
      <ListGroup.Item  className="mb-2"><FaWhatsapp></FaWhatsapp> Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item  className="mb-2"> risus</ListGroup.Item>
      <ListGroup.Item  className="mb-2">Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item  className="mb-2">Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
      </div>
      <div>
       <BrandCarousel/>
      </div>
      
        </div>
    );
};

export default RightSideNav;