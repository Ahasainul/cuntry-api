
import { useEffect } from 'react'
import './App.css'
import  axios  from 'axios'
import { useState } from 'react'

// install axios 
function App() {
 let [all,setAll] =useState ([])
useEffect(() =>{
  async function all(){
    let data = await axios.get('https://restcountries.com/v3.1/all')
   setAll(data.data)
  }
  all()
})
  return (
    <>
   <select > 
   {all.map((item)=>
    <option>
      {item.name.common}
    </option>
   )}
   </select>
     
    </>
  )
}

export default App
