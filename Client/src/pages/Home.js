import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageOne from '../components/PageOne'
import axios from 'axios'

const Home = () => {
//const will be created here
const [searchQuery, setSearchQuery] = useState('')

//functions created here
const testClick = async (e) => {
  e.preventDefault()
    let response = await axios.get('http://localhost:3001/api/owner/')
    setSearchQuery(response)
    console.log(response);

}


// const handleChange = (event) => {
//     setSearchQuery(event.target.value)
//   }





  return (
    <div>
      <PageOne testClick={testClick} />
    </div>
  )
}

export default Home
