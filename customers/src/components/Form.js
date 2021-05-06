import React,{useState} from 'react'
const Form = () => {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('');
    const [password,setPassword]=useState('');
   
    const submit=(e)=>{
        e.preventDefault();

        if(!gender){
            alert("please add a gender");
            return
        }
        fetch(`http://localhost:4000/users/add?first_name=${fname}&last_name=${lname}&phone=${phone}&email=${email}&address=${address}&gender=${gender}&password=${password}`)
        .then(()=>console.log("added"))
        .catch(err=>console.error(err));
       // alert("new user added successfully");
        
        setFname('');
        setLname('');
        setAddress('');
        setPhone('');
        setEmail('');
        setGender('');
        setPassword('');
        window.location.href='/';
    }
    return (
        <div className="container">
            <form className="add-form" onSubmit={submit}>
            <div className="form-control">
               
                <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="First name..." required />
            </div>
            <div className="form-control">
                
                <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Last name..." required />
            </div>
            <div className="form-control">
                
                <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address..." required />
            </div>
            <div className="form-control">
                
                <input type='tel' pattern="[0-9]{8}" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone number...(must be 8 integers)" required />
            </div>
            <div className="form-control">
                
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email..." required />
            </div>
            <div className="form-control">
                
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Create Password" required />
            </div>
            <div className="form-control">
                
                <select className="select-box select"  value={gender} onChange={(e)=>setGender(e.target.value)} required >
                    <option value="gender">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                   
                </select>
            </div>

            <input type="submit" value="Submit" className="btn btn-block"/>
        </form>
        </div>
    )
}

export default Form
