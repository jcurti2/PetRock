import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import PageTwo from '../components/PageTwo'


const RockOwner = () => {
// //use states
const [owner, setOwner] = useState('')
const location  = useLocation();
//pass this into get owner by id
// ${location.state.id}

const [rock, setRock] = useState('')

const [rockDelete, setRockDelete] = useState('')

const [newlyGeneratedRock, setNewlyGeneratedRock] = useState('')

//functions

const getOwners = async () => {
    let temp = await axios.get(`http://localhost:3001/api/owner/${location.state.id}`)
    setOwner(temp.data.owner)
    // console.log(temp.data.owner.name);
}

const getRock = async () => {
  let temp = await axios.get(`http://localhost:3001/api/rocks/`)
  setRock(temp)
  // console.log(temp.data.rocks[0]);
}
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
      <PageTwo rock={rock}  />
      <button type='submit'>Buy Rock</button>
      <button type='submit'>Sell Rock</button>
      <button type='submit'>Change Rock Name</button>
    </div>
  )
}

export default RockOwner
