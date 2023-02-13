

const RockComponent = (props) => {
  console.log(props.rock);
  return (
    <div>
     {/* Rock Name: {props.rock.data.rocks[0].name} */}
    {props.rock &&
    props.rock.rocks.length > 0 &&(
    props.rock.rocks.map((singleRock)=> (
  
      <div key={singleRock.id}>Name: {singleRock.name}</div>
    )))}
    </div>
  )
}

export default RockComponent
