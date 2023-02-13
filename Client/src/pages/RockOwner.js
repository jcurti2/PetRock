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

const [rock, setRock] = useState()

const [rockDelete, setRockDelete] = useState('')

const [newlyGeneratedRock, setNewlyGeneratedRock] = useState('')

//functions

const getOwners = async () => {
    const temp = await axios.get(`http://localhost:3001/api/owner/${location.state.id}`)
    setOwner(temp.data.owner)
    console.log(temp.data.owner);
}


const getRock = async () => {
  const temp = await axios.get(`http://localhost:3001/api/rocks/`)
  setRock(temp.data)
  // console.log(temp.data);
}
// console.log(rock.data);
// console.log(rock.data.rocks[0].name);


// const createRock = async () => {
//     let temp = await axios.post(`http://localhost:3001/api/rocks`)
//     setRock(temp)
//     console.log(temp);
// } 

// const generateRock = () => {
// //this function needs to generate a new rock randomly for user to decide to keep or discard

// }

// const sellRock = async () => {
//   let temp = await axios.delete(`http://localhost:3001/api/rocks/${ROCKIDNUMBER}`)
//   setRockDelete(temp)
//   console.log(temp);
// }

// const changeRockName = () => {
//     let temp = await axios.put(`http://localhost:3001/api/rocks/${ROCKIDNUMBER}`)
//     setRockName(temp)
//     console.log(temp);
// }


 useEffect(() =>{
getOwners()
getRock()
 },[])

  return (
    <div>

      {owner.name}
      {owner.money}
      {owner.picture}

       <section className="container-grid">
      
      <RockComponent  rock={rock} owner={owner}/>
      </section>
      <button type='submit'>Buy Rock</button>
      <button type='submit'>Sell Rock</button>
      <button type='submit'>Change Rock Name</button>
    </div>
  )
}

export default RockOwner
