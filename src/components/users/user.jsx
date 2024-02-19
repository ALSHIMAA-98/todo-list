// to use useStat
import { useEffect, useState } from "react"
export default function usersFunc(){

// setUsers is a func to change te values of the users
     const [users,setUsers] =useState([
        { id:1, name:"John Doe", age:32}, 
        {id:2,name:"Jane Smith",age:28}
    ])

const [isAuth,setAuth]=useState(false)
//mounting
useEffect(()=>{
console.log("component is mounting");

//un mounting
return ()=>{console.log("component is unmounting");}
},[])
//update 
useEffect(()=>{
console.log("isAuth is changed component is updated");
},[isAuth])

const handleToggle=()=>{

    setAuth(!isAuth)
    console.log(isAuth);
    
}
return <>
{(isAuth)?<ul>
            {users.map((user) => {
             if(user.isAdmin){
                return <li key={user.id}>{user.name}</li>
             }
                
            })}

        </ul>:<p>You must login first</p>}

        <button className="btn btn-primary" onClick={()=>{handleToggle()}}>toggle</button>
        

</>

}