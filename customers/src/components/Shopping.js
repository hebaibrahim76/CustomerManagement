import React,{useEffect,useState} from 'react'
const Shopping = (props) => {
    const [items,setItems]=useState([]);
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setItems(tasksFromServer.data);
      }
      
      //console.table(tasks.data); 
      getTasks();
    }, [])
  
    // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:4000/shopping');
      const data = await res.json();
      
      
      return data;
    
  
    }
    const purchase= async (id)=>{
      console.log(`http://localhost:4000/shopping/${props.match.params.id}/${id}`);
      await fetch('http://localhost:4000/shopping/'+props.match.params.id+'/'+id);
      alert("added");
    }

    return (
        <div >
    
            <ul style={{listStyleType:'none'}}>     
                    {items?items.map((user,index)=>(
            <li key={user.id}>
            <div className="container">
                <img src={user.source} width="200px" height="200px" alt={user.name} />
                <hr/>          
                <div><label> {user.name}</label></div>
                <hr/>  
                <div><label> ${user.price}</label></div>
                <hr/>  
                <button className="btn" onClick={()=>purchase(user.id)} >Add to Cart</button>
            </div>
            </li>
         )):''
         }
                
            </ul>
        </div>
    )
}

export default Shopping
