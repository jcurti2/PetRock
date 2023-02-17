import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import rockData from '../rockData.json'
import EditRock from './EditRock'



const RockComponent = ({owner, getOwners}) => {

  const [rock, setRock] = useState([])

  const [randRock, setRandRock] = useState([])

  const getRock = async () => {
    console.log(owner);
    const temp = await axios.get(`/api/rocksowner/${owner._id}`)
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
const removeRandRock = (genRock) => {
  setRandRock((current) =>
    current.filter((indvRock) => indvRock.rarity !== genRock.rarity && indvRock.cost !== genRock.cost)
  );
};


const sellRock = async ( rock ) => {

  let temp = await axios.get(`/api/owner/${owner._id}`)

  let verifyOwner = temp.data.owner
  
  verifyOwner.money = verifyOwner.money + Math.floor((rock.cost * .75))

  let response = await axios.put(`/api/owner/${verifyOwner._id}`,verifyOwner)
  
  await axios.delete(`/api/rocks/${rock._id}`)

  getRock();

  getOwners();
}


const buyRock = async (rock) => {
  
  rock.owner_id = owner._id
console.log(owner._id);
  let temp = await axios.get(`/api/owner/${owner._id}`)

  let verifyOwner = temp.data.owner

  if (verifyOwner.money - rock.cost >= 0)
  {
  verifyOwner.money = verifyOwner.money - rock.cost

  let response = await axios.put(`/api/owner/${verifyOwner._id}`,verifyOwner)

  await axios.post(`/api/rocks/`, rock)
  removeRandRock(rock)
  } else{
  alert('Not enough money')
  }
  
  getOwners()
  getRock()
  
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
       <div className='container'>{
      rock &&( 
          rock.map((singleRock)=> (
              <div key={singleRock._id} className='card'> 
                <img src={singleRock.picture} alt={singleRock.name} />
                <p><b>{singleRock.name}</b></p>
                <p>Rarity:{singleRock.rarity}</p>
                <p>${singleRock.cost}</p>
                <EditRock rock={singleRock} getRock={getRock}/>
                <button className='cardButton' id='sellRock' onClick={() => sellRock(singleRock)}>Sell Rock</button>
              </div> 
      
                ))
              )
        }</div>
        <div className='randRocks'><p>Rocks for Sale</p></div>
      <div className='container'> 
        {randRock.map((indvRock) => {
          return (
            <div key={indvRock.name} className='cardGenerated'>
              <img src={indvRock.picture} alt={indvRock.name} />
              <p><b>{indvRock.name}</b></p>
              <p>Rarity: {indvRock.rarity}</p>
              <p>${indvRock.cost}</p>
              <button className='cardButton'  onClick={() => buyRock(indvRock)}>Buy Rock</button>
            </div>
          );
        })}
     
      </div>
    </div>
  )
}

export default RockComponent
