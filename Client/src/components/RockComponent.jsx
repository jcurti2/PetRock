import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import rockData from '../rockData.json'



const RockComponent = (props) => {


  const [rock, setRock] = useState([])

  const [randRock, setRandRock] = useState([])


function rockGenerator(){
 const arr = [] 
    for(let i = 0; i < 5; i++){
      console.log(`iteration ${i}`)
  // const min = 1;
  //   const max = 100;
  //   const rand = min + Math.random() * (max - min);
  let temp = {
    
    "name": "Anorthosite",
    "picture": rockData.picture[1 + Math.random() * ((rockData.picture.length) - 1)], 
    "rarity": 1 + Math.random() * (100 - 1),
    "cost": 1 + Math.random() * (1000 - 1),
    }
    console.log(temp)
    arr.push(temp)
}
console.log(arr)  
setRandRock(arr)
}

// if(props.generated == true)
// {
//   rockGenerator();
// }
  


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
    setRock(temp.data.rocks)

    // console.log(temp.data);
  }

useEffect(() => {
  getRock()
  
},[])

useEffect(()=> {
  rockGenerator()
},[]);
  
  console.log(rock);
  return (
    <div>
      <div>
        {randRock.map((indvRock) => {
          return (
            <div key={indvRock.name}>
              <img src={indvRock.picture} alt={indvRock.name} />
              <p>Name: {indvRock.name}</p>
              <p>Rarity: {indvRock.rarity}</p>
              <p>Cost: {indvRock.cost}</p>
              <button type='submit'>Buy Rock</button>
            </div>
          );
        })}
     
      </div>
     {rock &&( 
     rock.map((singleRock)=> (
    
      <div key={singleRock.id}>Name: {singleRock.name}
        
         {singleRock.owner_id &&    <button type='submit'>Sell Rock</button>}
         {singleRock.owner_id &&    <button type='submit'>Change Rock Name</button>}
       </div> 
      
    )))}
    </div>
  )
}

export default RockComponent
