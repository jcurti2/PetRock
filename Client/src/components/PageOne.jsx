const PageOne = ({ handleChange, ownerName, submitClick }) => {
  return (
    <div className="mainContainer">
      <div className='mainDisplay'> <h1 className='title'>Welcome to Rock Collection</h1>
        <form className="startForm" onSubmit={(e) => submitClick(e)}>
          <input className="input"
            type='text'
            value={ownerName}
            placeholder="Owner Name"
            onChange={handleChange}
          >
          </input>
          <div className='enterButton'><button className="startButton" type='submit'>Enter</button></div>
        </form></div>
    </div>
  )
}

export default PageOne
