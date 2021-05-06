import React,{useState,useEffect} from 'react'
import { FcBusinessman,FcBusinesswoman } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';
const Users = () => {
    const [tasks, setTasks] = useState({});
    const [users,setUsers]=useState([]);
    const [del,setDel]=useState(false);
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
        setUsers(tasksFromServer.data);
      }
      
      //console.table(tasks.data); 
      getTasks();
    }, [del])
  
    // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:4000/users');
      const data = await res.json();
     // console.log(data);
      
      return data;
    
  
    }
    const deleteUser= async (id)=>{
      await fetch('http://localhost:4000/user/delete/'+id);
      console.log("deleted");
      setDel(true);
    }
  
    return (
        <div>
        
          <table>
        <thead>
        <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>  
            <th>&nbsp;</th>
            <th>&nbsp;</th>
         </tr>
         </thead>
         <tbody>
         {users?users.map((user,index)=>(
             <tr key={user.id}>
                <td>{(user.gender==="male")?<FcBusinessman size={50} /> :<FcBusinesswoman size={50} /> }</td>
                <td><a href={"/user/"+user.id} > {user.first_name} {user.last_name} </a></td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td> <a href={"/user/orders/"+user.id}>View Cart</a> </td>   
                <td> <FaTrash style={{color:'red',cursor:'pointer'}} onClick={()=>deleteUser(user.id)} /> </td>
             </tr>
         )):''
         }
         </tbody>
        </table>
        </div>
    )
}

export default Users
