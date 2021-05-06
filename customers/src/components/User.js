import React,{useState,useEffect} from 'react'
import { FcBusinessman,FcBusinesswoman } from 'react-icons/fc';
import { AiOutlineMail,AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaCheckCircle,FaPen } from 'react-icons/fa';

const User = (props) => {
  
    const [user,setUser]=useState({});
    const [edit,setEdit]=useState(false);

    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [name,setName]=useState('');
    const [change,setChange]=useState(false);
   
  
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setUser(tasksFromServer.data[0]);
      }
      console.log("user id="+user.id);
      console.log("window name="+window.name);
      
      getTasks();
    }, [change])
  
    // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:4000/user/'+props.match.params.id);
      const data = await res.json();
     // console.log(data);
      
      return data;
    
  
    }
    const show=()=>{
      setEdit(!edit);
      setEmail(user.email);
      setName(user.first_name+' '+user.last_name);
      setPhone(user.phone);
      setAddress(user.address);
      console.log(edit);
    }
    const save=(id)=>{
      setChange(!change);
      setEdit(!edit);
      var res=name.split(" ");
      const fname=res[0];
      const lname=res[1];
      console.log(edit);
      fetch(`http://localhost:4000/user/update/${id}?first_name=${fname}&last_name=${lname}&phone=${phone}&email=${email}&address=${address}`)
      .then(()=>console.log("ok"))
      .catch(err=>console.error(err));
    }
    return (
        <div>
        <p style={{float:'left'}}> {(user.gender==="male")?<FcBusinessman size={250} /> :<FcBusinesswoman size={250} /> } </p>
       <div>
      { edit?  <input type='text' className='text-line' value={name} 
      onChange={(e)=>setName(e.target.value)}/> : <h3>{user.first_name}&nbsp; {user.last_name}</h3>}
        <br/>
      
      {edit? <input type='text' className='text-line' value={email} 
        onChange={(e)=>setEmail(e.target.value)}/> :<p>  <AiOutlineMail/> {user.email} </p>} {edit?<br/>:''}
      {edit? <input type='text' className='text-line' value={phone} 
        onChange={(e)=>setPhone(e.target.value)}/> :<p> <AiOutlinePhone/> {user.phone} </p> } {edit?<br/>:''}
      {edit? <input type='text' className='text-line' value={address} 
        onChange={(e)=>setAddress(e.target.value)}/> :<p>  <GoLocation /> {user.address} </p>} {edit?<br/>:''}
      </div>
      { window.name==user.id? <div>
      {edit?<FaCheckCircle style={{color:'green',cursor:'pointer'}} 
          onClick={()=>save(user.id)}/>:<FaPen style={{color:'green',cursor:'pointer'}} onClick={show} />}
          </div>:''}
          <br/>
      <a href={'/user/orders/'+user.id} >View Cart</a><br/><br/>
      { window.name>0 && <a href={'/shopping/'+user.id} >Go To Shop</a>}
        <br/> <br/>   
        </div>
    )
}

export default User
