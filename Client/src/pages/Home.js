import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageOne from '../components/PageOne'
import axios from 'axios'
import PageTwo from '../components/RockComponent'

const Home = () => {
//const will be created here
const [ownerName, setOwnerName] = useState('')
const navigate = useNavigate()

//functions created here
const submitClick = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3001/api/owner/',{
      "name": ownerName,
      "money": "1000"
  })
  let ownerId = response.data.owner._id

navigate('/page2', {state:{id:ownerId,}})
    console.log(ownerName);
}


const handleChange = (event) => {
    setOwnerName(event.target.value)
  }
return (
    <div>
      <PageOne submitClick={submitClick} handleChange={handleChange} ownerName={ownerName} />
      {/* <PageTwo ownerId={ownerId}/> */}
    </div>
  )
}

export default Home



//reference button
// const testClick = async (e) => {
//   e.preventDefault()
//     let response = await axios.get('http://localhost:3001/api/owner/')
//     setSearchQuery(response)
//     console.log(response);
// }