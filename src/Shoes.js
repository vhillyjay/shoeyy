const Shoes = ({shoes, title, handleDelete}) => {
  return ( 
    <div className="shoes-list">
      <h1 className="text-5xl">{title}</h1>
      { shoes.map((shoesData) => (
      <div className="shoes-preview" key={shoesData.id}>
        <h2 className="text-4xl">{ shoesData.brand }</h2>
        <h4 className="text-2xl">{ shoesData.model }</h4>
        <button className="bg-slate-400" onClick={() => handleDelete(shoesData.id)}>Delete</button>
      </div>
    ))}
    </div>
    
  );
}
 
export default Shoes;