import React,{useState,useEffect} from 'react'

const Login = () => {
   
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const [tasks, setTasks] = useState({});
    const [users,setUsers]=useState([]);
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
        setUsers(tasksFromServer.data);
      }
      
      //console.table(tasks.data); 
      getTasks();
    }, [])
  
    // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:4000/users');
      const data = await res.json();
     // console.log(data);
      
      return data;
    
  
    }
    const submit=(e)=>{
        
        e.preventDefault();
        var f=false;
        var f2=false;
        console.table(users);
        if(email==='admin@admin.com'){
            if(password==='123'){
                window.name=0;
                window.location.href='/users';
            }
            else{
                alert("incorrect password");
            }
            
        }
        else{
            users.map(user=>{
            console.log(user.email);
            if(email===user.email){
                f=true;
                if(password===user.password){
                    f2=true;
                    window.name=user.id;
                   
                }
            }
        })
       if(f===true && f2===true){
        window.location.href='/shopping/'+window.name;
       }
       if(f===true && f2===false){
        alert("incorrect password");
       }
       if(f===false){
           alert("you are not registered");
          
       }}
       console.log("f="+f+"  f2="+f2);
    }
    return (
       
        <div className="container">
            <form className="add-form" onSubmit={submit}>
            <div className="form-control">
               
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email..." required />
            </div>
            <div className="form-control">
               
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password..." required />
            </div>
           

            <input type="submit" value="Submit" className="btn btn-block"/>
        </form>
        </div>
       
    )
}

export default Login
