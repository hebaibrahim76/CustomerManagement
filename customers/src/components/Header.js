import React from 'react';
import { useLocation, useState } from 'react-router-dom'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { ImProfile } from 'react-icons/im';
import { RiLogoutCircleLine } from 'react-icons/ri';
const Header = () => {
    const id=window.name;
    const location = useLocation()

    const logout=()=>{
        window.name=undefined;
        window.location.href='/';
    }
    //    const [user,setUser]=useState({});
  
    // useEffect(() => {
    //   const getTasks = async () => {
    //     const tasksFromServer = await fetchTasks();
    //     setUser(tasksFromServer.data[0]);
    //   }
    //   console.log(user);
      
    //   getTasks();
    // }, [])
  
    // // Fetch Tasks
    // const fetchTasks = async () => {
    //   const res = await fetch('http://localhost:4000/user/'+props.match.params.id);
    //   const data = await res.json();
    //  // console.log(data);
      
    //   return data;
    
  
    // }
    return (
        <div style={{background:'black'}} >
        <br/>
        {location.pathname==='/' && <h1 style={{color:'white',alignItems:'center'}} >Login</h1> }
        {location.pathname==='/form' && <h1 style={{color:'white',alignItems:'center'}} >Register</h1> }
        {location.pathname==='/users' && <h1 style={{color:'white',alignItems:'center'}} >Customer Management</h1> }
        {location.pathname==='/shopping' && <h1 style={{color:'white',alignItems:'center'}} >Shopping</h1> }
        {location.pathname==='/user/order' && <h1 style={{color:'white',alignItems:'center'}} >My Cart</h1> }
        { window.name>0 && location.pathname!=='/' && location.pathname!=='/users'  && <IconButton component={Link} to={'/user/'+id} >
  <ImProfile size={40} style={{color:'white'}} />
 <label id="lb" >My profile</label>
</IconButton> 
}
{window.name>0 && location.pathname!=='/'   && <button className='btn' onClick={logout}>Log Out</button> }
         {/* {location.pathname==='/user' && <h1 style={{color:'white',alignItems:'center'}} >{user.first_name}</h1> } */}
       
     
      {/* {location.pathname === '/form' && location.pathname === '/user/orders/:id' (
            <Link style={{color:'white'}} to='/users'>Go Back</Link>
      )} */}
       
   

        <br/>
        
        </div>
    )
}

export default Header
