const PageOne = ({handleChange, searchQuery, getSearchResults,testClick}) => {
  return (
      <form onClick = {(e) => testClick(e)}>
        <input 
            type='text'
            // value={searchQuery}
            placeholder="Owner Name"
            // onChange={handleChange}
            >
        </input>
        <button type='submit' onClick={testClick}>Enter</button>
      </form>
  )
}

export default PageOne
