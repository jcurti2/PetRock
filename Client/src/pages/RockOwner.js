import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import RockComponent from '../components/RockComponent'


const RockOwner = () => {
// //use states
const [owner, setOwner] = useState('')
const location  = useLocation();

//pass this into get owner by id
// ${location.state.id}

//functions

const getOwners = async () => {
    const temp = await axios.get(`http://localhost:3001/api/owner/${location.state.id}`)
    setOwner(temp.data.owner)
    console.log('here,' + `${location.state.id}`);
}

 useEffect(() =>{
getOwners()

 },[])

  return (
    <div>

      {owner.name}

      {owner.money}

      {owner.picture}

      <RockComponent owner={owner} getOwners={getOwners}/>
      
    </div>
  )
}

export default RockOwner
