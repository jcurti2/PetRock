import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import rockData from '../rockData.json'
import EditRock from './EditRock'



const RockComponent = (props) => {

  const [rock, setRock] = useState([])

  const [randRock, setRandRock] = useState([])

  // const [updateRock, setUpdateRock] = useState({})

  const [ownerRockId, setownerRockId] = useState('')

  const [editing, setEditing] = useState(true)



  

  const getRock = async () => {
    const temp = await axios.get(`http://localhost:3001/api/rocks/`)
    setRock(temp.data.rocks)
  }
  
function rockGenerator(){
 const arr = [] 
    for(let i = 0; i < 5; i++){

  let temp = {
    
    "name": "Anorthosite",
    "picture": rockData.picture[1 + Math.random() * ((rockData.picture.length) - 1)], 
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





// const handleEditState = (rock) => { 
//     setUpdateRock({name:`${rock.name}`})
//     setownerRockId(rock._id)
// }


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
        
        {/* <form onSubmit = {(e) => handleSubmit(e, singleRock._id )}>
        <input 
            type='text'
            value={singleRock.name}
            placeholder="Rock Name"
            onChange={handleChange}
            >
          </input>
          <button onClick={() => 
            handleEditState(singleRock)
          } type='submit'>ChangeName</button>
          </form> */}
       </div> 
      
    )))}
    </div>
  )
}

export default RockComponent
