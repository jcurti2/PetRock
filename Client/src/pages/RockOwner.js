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
    const temp = await axios.get(`http://localhost:3001/api/owner/${location.state.id}`).then(res => {setOwner(res.data.owner)})
    // setOwner(temp.data.owner)
    console.log('here,' + `${location.state.id}`);
    console.log(temp);
}

 useEffect(() =>{
getOwners()

 },[owner])

  return (
    <div >
<div className='rockOwner'>
      <h2 className='ownerName'>{owner.name}</h2>

      <h2 className='ownerMoney'> ${owner.money}</h2>

      {owner.picture}
</div>
      <RockComponent owner={owner} getOwners={getOwners}/>
      
    </div>
  )
}

export default RockOwner
