import { useState } from "react"
import Shoes from "./Shoes";

const Home = () => {
  const [shoes, setShoes] = useState([
    { id: 1, brand: 'Nike', model: 'Dunk Low', size: 7, gender: 'Male' },
    { id: 2, brand: 'Nike', model: 'Air Force 1', size: 7, gender: 'Female' },
    { id: 3, brand: 'Nike', model: 'Jordan 1', size: 10, gender: 'Male' },
  ])
  return ( 
    <div className="home">
      <Shoes shoes={shoes} title="All"/>
      {/* <Shoes shoes={shoes.filter((shoes) => shoes.gender === 'Male')} title="Men's"/> */}
    </div>
  );
}

export default Home;

// const Home = () => {
//   const [name, setName] = useState('John')
//   const handleClick = () => {
//     setName('Doe')
//     console.log('handleClick')
//   }
//   // const handleClickAgain = (name, e) => {
//   //   console.log('hello ' + name)
//   //   console.log(e.target)
//   // }
//   return ( 
//     <div className="home">
//       <h2>Home Page / Home.js</h2>
//       <p>{ name }</p>
//       <button onClick={ handleClick }>Click me sir</button>
//       {/* <button onClick={ (e) => {
//         handleClickAgain('john', e)
//       } }>Click me sir</button> */}
//     </div>
//   );
// }
 
