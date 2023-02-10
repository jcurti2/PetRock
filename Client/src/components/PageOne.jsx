const PageOne = ({handleChange, ownerName ,submitClick}) => {
  return (
      <form onClick = {(e) => submitClick(e)}>
        <input 
            type='text'
            value={ownerName}
            placeholder="Owner Name"
            onChange={handleChange}
            >
        </input>
        <button type='submit'>Enter</button>
      </form>
  )
}

export default PageOne
