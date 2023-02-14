import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const RockComponent = (props) => {
  
const [rock, setRock] = useState()

// const [rockDelete, setRockDelete] = useState('')

// const [newlyGeneratedRock, setNewlyGeneratedRock] = useState('')

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

  const getRock = async () => {
    const temp = await axios.get(`http://localhost:3001/api/rocks/`)
    setRock(temp.data)
    // console.log(temp.data);
  }

useEffect(() => {
  getRock()
},[])
  
  // console.log(props.rock);
  return (
    <div>
     {/* Rock Name: {props.rock.data.rocks[0].name} */}
    {rock &&
    rock.rocks.length > 0 &&(
    rock.rocks.map((singleRock)=> (
    
      <div key={singleRock.id}>Name: {singleRock.name}
        {!singleRock.owner_id &&
        <button type='submit'>Buy Rock</button>}
        {singleRock.owner_id && (
        <button type='submit'>Sell Rock</button>)}
        {singleRock.owner_id && (
        <button type='submit'>Change Rock Name</button>)}
      </div>
      
    )))}
    </div>
  )
}

export default RockComponent
