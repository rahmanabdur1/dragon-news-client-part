import React, { useContext,} from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
 import { Spinner} from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loader}=useContext(AuthContext);

   

      if(loader){
        return <Spinner animation="border" variant='primary'/>
      }


     if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
     }
     return children
};

export default PrivateRoute;