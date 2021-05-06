import React,{useState,useEffect} from 'react'
const Order = (props) => {

    const [itemList,setItemList]=useState([]);
    const [total,setTotal]=useState(0);
    const [change,setChange]=useState(false);
 
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setItemList(tasksFromServer.data);
      }
      console.table(itemList);
      getTasks();
      console.log(total);
    },[change])
  
   

    const fetchTasks = async () => {
      const res = await fetch('http://localhost:4000/user/orders/'+props.match.params.id);
      const data = await res.json();
      console.log("hi");
      console.log(data);
      var cnt=0;
      data.data.map(item=>{
          cnt+=item.price
      })
      setTotal(cnt);
      return data;
    }
    const remove= async (id)=>{
      setChange(!change);
      console.log('http://localhost:4000/user/orders/'+props.match.params.id+'/'+id);
      await fetch('http://localhost:4000/user/orders/'+props.match.params.id+'/'+id);
      alert("removed from cart");
    }
   
    

    return (
        <div>
        <h3>total is {total}</h3>
        <ul style={{listStyleType:'none'}}>     
                    {itemList?itemList.map((user,index)=>(
            <li key={index}>
            <div className="container">
                <img src={user.source} width="200px" height="200px" alt={user.name} />
                <hr/>          
                <div><label> {user.name}</label></div>
                <hr/>  
                <div><label> ${user.price}</label></div>
                 <hr/>
                { window.name>0 && <button style={{backgroundColor:'red'}} className='btn' onClick={()=>remove(user.id)} >Remove</button>
                }
            </div>
            </li>
         )):'No Orders Yet'
         }
                
            </ul>
            </div>
    )
}

export default Order
