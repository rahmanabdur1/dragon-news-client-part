import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Register = () => {
  const [error, setError]=useState('')
  const [accepted, setAccepted]=useState(false)
    const {createUser, upDateProfile, verifyEmail} =useContext(AuthContext)
   const handleOnSubmit =event=>{
       event.preventDefault();
       const form =event.target;
       const photoURL= form.photoURL.value;
       const email=form.email.value;
       const password=form.password.value;
       const name= form.name.value;

      //  console.log(email,password,name,photoURL)

       createUser(email,password)
       .then( result => {
        const user =result.user;
        setError('')
        form.reset()
        handleUpdateProfile(name, photoURL)
        handleEmailVerify();
        toast.success('Please verify your email address.')
        console.log(user);
       })
       .catch(e => console.error(e))
       setError(error.message)
   };

   const handleUpdateProfile=(name, photoURL)=>{
      const profile ={
        displayName: name,
        photoURL
      }
      upDateProfile(profile)
      .then(()=> {})
      .catch(error => console.error(error))
   }

   const handleEmailVerify =()=>{
    verifyEmail()
    .then(()=>{})
    .catch(error => console.error(error));
   }

   const handleAccepted=(e)=>{
      setAccepted(e.target.checked)
   }
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label> Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label> Your photoURL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"placeholder="Password" required/>
        </Form.Group>
       <Form.Group>
        <Form.Check
         type="checkbox"
         onClick={handleAccepted}
         label={<>Accept <Link to='/terms'>Terms and conditions</Link> </>}
        ></Form.Check>
       </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
         Register
        </Button>
        <Form.Text className="text-danger">
          {error}
          </Form.Text>
      </Form>
    );
};

export default Register;