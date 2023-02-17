import { useNavigate } from 'react-router-dom'

navigate = useNavigate()

const About = () => {
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
    <h1>About Rock Collector</h1>
    <p>This app is made for you to attempt to collect the "rarest rocks" 100 being most rare and 1 being a common rock with a limimted amount of money. You can sell your rocks for a better one but keep in mind you sell back at a reduced rate. Good luck and happy collecting!</p>
      <div className='goBackAbtPg'>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  )
}

export default About
