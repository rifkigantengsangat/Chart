import React from 'react'

const Keranjang = ({fav,sameData}) => {

  return (
    <div>
        <h1>Fav</h1>
     {fav.map((e)=>{
        return <div key={e.id}>
            <h1>{e.title}</h1>
            <h2>{e.body}</h2>
           
        </div>

     })}
</div>
  )
}

export default Keranjang