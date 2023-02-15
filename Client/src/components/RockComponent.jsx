import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import rockData from '../rockData.json'
import EditRock from './EditRock'



const RockComponent = (props) => {

  const [rock, setRock] = useState([])

  const [randRock, setRandRock] = useState([])

  const getRock = async () => {
    const temp = await axios.get(`http://localhost:3001/api/rocks/`)
    setRock(temp.data.rocks)
  }
  
function rockGenerator(){
 const arr = [] 
    for(let i = 0; i < 5; i++){
      let name =Math.floor( [1 + Math.random() * ((rockData.names.length) - 1)]) 
      let randoName=rockData.names[name]
      let picture=Math.floor([1 + Math.random() * ((rockData.picture.length) - 1)])
      let randomPic=rockData.picture[picture]
  let temp = {
    
    "name":randoName,
    "picture": randomPic, 
    "rarity": 1 + Math.random() * (100 - 1),
    "cost": 1 + Math.random() * (1000 - 1),
    }
    
    arr.push(temp)
  }   
    setRandRock(arr)
}


const sellRock = async ( id ) => {
  await axios.delete(`http://localhost:3001/api/rocks/${id}`)
  getRock();
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
    
       <div key={singleRock._id}> <EditRock rock={singleRock} getRock={getRock}/>Name: {singleRock.name}       
        <button onClick={() => sellRock(singleRock._id)}>Sell Rock</button>
       </div> 
      
    )))}
    </div>
  )
}

export default RockComponent
