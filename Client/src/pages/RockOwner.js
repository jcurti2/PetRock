import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const RockOwner = () => {
// //use states
const [owner, setOwner] = useState()
const location  = useLocation();
//pass this into get owner by id
// ${location.state.id}

//functions

const getOwners = async () => {
    let temp = await axios.get(`http://localhost:3001/api/owner/${location.state.id}`)
    setOwner(temp)
    // console.log(temp.data.owner.name);
}
// console.log(owner.data.owner.name);
 
 useEffect(() =>{
getOwners()
 },[])

  return (
    <div>
      {owner.data.owner.name}
      {owner.data.owner.money}
     
    </div>
  )
}

export default RockOwner
