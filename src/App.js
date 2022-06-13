import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {dummyProduct} from './DummyData';
import Keranjang from './Keranjang';
function App() {
  const [products, setProducts] = useState([]);
  const [color,setColor] = useState('white')
  const [detail,setDetail] = useState([]); 
  const [open,setOpen] = useState(false)
  const [fav,setFav] = useState([])
  const detailProd =async(id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json();
    setDetail(data)
    setOpen(!open)
   }
 useEffect(() => {
  const fetchProducts = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    setProducts(data);
  }
 
  fetchProducts();
  
 },[])
 const favorite = (id)=>{
  const getFavorite = products.find(item=>item.id ===id)
  setFav([...fav,getFavorite])
    const check = fav.some(x=>x.id ===id)
    if(check){
      fav.map((e)=>{
        e.id === products.id ? {...e,count : e.count +1} : e 
      
      })
 }else{
  fav.concat({
    ...products,
    count:1
  })
 }


  return (
    <div className="App">
      {products.map((e)=>{
        return(
          <div key={e.id}>
            <h1>{e.title}</h1>  
            <h2>{e.body}</h2>
            <button onClick={()=>{detailProd(e.id)}}>Detail</button>
            <button onClick={()=>{favorite(e.id)}} style={{ color : "red" }}>Favorite</button>
          </div>
        )
      })}
     
      {fav.length===0?<div>Belum Ada Fav :(</div> : <Keranjang fav={fav} sameData={sameData}/>}
    </div>
  );
}

export default App;
