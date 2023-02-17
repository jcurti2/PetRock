import { useState } from 'react' 
import axios from 'axios'

const EditRock = ({rock, getRock}) => {

   const [updateRock, setUpdateRock] = useState(rock)

   const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(updateRock._id);
    let response = await axios.put(`/api/rocks/${updateRock._id}`,updateRock)
    getRock()
}

const handleChange = (event) => {  
  setUpdateRock(
      {...updateRock, [event.target.name] : event.target.value})
}


return(
    <div>
         <form onSubmit = {(e) => handleSubmit(e, updateRock._id )}>
        <input  
            name = 'name'
            type='text'
            placeholder="Rock Name"
            onChange={handleChange}
            >
          </input>
          <button className='cardButton' type='submit'>ChangeName</button>
          </form>
          
    </div>
)
}

export default EditRock