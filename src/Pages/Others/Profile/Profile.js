import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useState } from 'react';
import { useRef } from 'react';

const Profile = () => {
    const {user} =useContext(AuthContext);
    const [name, setName]=useState(user.displayName);
    const photoURLRef =useRef(user.photoURL)

    const handleSubmit =event=>{
          event.preventDefault()
          console.log(name)
          console.log(photoURLRef.current.value)
    }

    const handleChange =event =>{
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control defaultValue={user?.email} readOnly type="email"  placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onClick={handleChange} displayName={name} type="text" name='name' placeholder="name" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPh0toURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text"  placeholder="Ph0toURL" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
        Login
        </Button>
        <Form.Text className="text-danger">

          </Form.Text>
      </Form>
    );
};

export default Profile;