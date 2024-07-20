

const Card = ({img, name, rating}) => {
  return (
    <div className="w-30 h-40 border-2 border-white flex flex-col items-center" >
      <img className="w-20 h-30" src={img}/>
      <h1 className="text-sm text-red-600">{name}</h1>
      <h1 className="text-sm text-black">{rating}</h1>
    </div>
  )
}

export default Card;