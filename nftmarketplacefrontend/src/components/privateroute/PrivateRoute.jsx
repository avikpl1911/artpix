import { Navigate, Outlet,useNavigate } from 'react-router-dom';



const PrivateRoute = ({ children,isauth }) => {
 const navigate = useNavigate();
 

    if (isauth==0){
        return  <Outlet />;
    }else{
        return <Navigate to="/login"/>
    }
   
};

export default PrivateRoute;