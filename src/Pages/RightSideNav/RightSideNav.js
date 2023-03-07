import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub,FaFacebook,FaWhatsapp} from "react-icons/fa"
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
      <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>Login width Google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub>Login width Github</Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ListGroup>
      <ListGroup.Item  className="mb-2"><FaFacebook></FaFacebook> Cras justo odio</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className="mb-2"> risus</ListGroup.Item>
      <ListGroup.Item className="mb-2">Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
      <div>
       <BrandCarousel/>
      </div>
        </div>
    );
};

export default RightSideNav;