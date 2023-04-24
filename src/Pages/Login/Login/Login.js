import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const navigate =useNavigate()
    const [error, setError]=useState('')
   const {signIn, setLoader} =useContext(AuthContext);
   const location=useLocation();
   const from=location.state?.from?.pathname || '/'

   const handleSubmit= event=>{
      event.preventDefault();
      const form=event.target;
      const password=form.password.value;
      const email=form.email.value;
      console.log(email,password)
      signIn(email,password)
      .then(result =>{
        const user=result.user;
        form.reset()
        setError('')
        if(user.emailVerified){
          navigate(from, {replace: true});
        }
        else{
          toast.error('Your email is not verified.Please verify tour email address')
        }
      //   navigate(from , {replace: true})
      //  console.log(user)

      })
      .catch(error=>console.error(error))
      setError(error.message)
      .finally(()=>{
        setLoader(false)
      })
   }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
        Login
        </Button>
        <Form.Text className="text-danger">
          {error}
          </Form.Text>
      </Form>
    );
};

export default Login;