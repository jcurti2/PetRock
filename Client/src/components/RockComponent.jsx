import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import rockData from '../rockData.json'
import EditRock from './EditRock'
import Carousel from './Carousel'



const RockComponent = ({owner, getOwners}) => {

  const [rock, setRock] = useState([])

  const [randRock, setRandRock] = useState([])

  const [updateOwnerMoney, setUpdateOwnerMoney] = useState(owner)

  const getRock = async () => {
    
    const temp = await axios.get(`http://localhost:3001/api/rocksowner/${owner._id}`)
    console.log(temp);
    setRock(temp.data.rock)
    console.log(rock);
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
    "rarity": Math.floor(1 + Math.random() * (100 - 1)),
    "cost": Math.floor(1 + Math.random() * (1000 - 1)),
    }
    
    arr.push(temp)
  }   
    setRandRock(arr)
}


const sellRock = async ( id ) => {
  await axios.delete(`http://localhost:3001/api/rocks/${id}`)
  getRock();
}


const buyRock = async (rock) => {
  console.log(owner);

  // let temp = await axios.get(`http://localhost:3001/api/owner/${owner._id}`)
  rock.owner_id = owner._id
  
  await axios.post(`http://localhost:3001/api/rocks/`, rock)
  
  getRock()

  // let ownerMoney = temp.data.owner.money
      
  // if (ownerMoney - rock.cost >= 0)
  // {ownerMoney -= rock.cost
  //   await axios.put(`http://localhost:3001/api/owner/${ownerMoney}`)
  // } else {
  
  // }
}

useEffect(() => {
  getRock()
  buyRock()
  
},[])

useEffect(()=> {
  rockGenerator()
},[]);
  
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
              <button onClick={() => buyRock(indvRock)}>Buy Rock</button>
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
