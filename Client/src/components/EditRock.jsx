import { useState } from 'react' 
import axios from 'axios'

const EditRock = ({rock, getRock}) => {

   const [updateRock, setUpdateRock] = useState(rock)

   const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.put(`http://localhost:3001/api/rocks/${updateRock._id}`,updateRock)
    getRock()
}

const handleChange = (event) => {  
  setUpdateRock(
      {...updateRock, [event.target.name] : event.target.value})    
console.log(updateRock)
}


return(
    <div>
         <form onSubmit = {(e) => handleSubmit(e, updateRock._id )}>
        <input  
            name = 'name'
            type='text'
            value={updateRock.name}
            placeholder="Rock Name"
            onChange={handleChange}
            >
          </input>
          <button type='submit'>ChangeName</button>
          </form>
    </div>
)
}

export default EditRock