
import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
const About = () => {
   const [data,setData] = useState([])


useEffect(() =>{
 
    getRequest()  
},[])
 const getRequest = async() =>{
        const response = await axios.get(`http://localhost:8000/todos`)
        setData(response.data)
    }
const DeleteRequest =  async(id) =>{
    try {
           await axios.delete(`http://localhost:8000/todos/${id}`)

        getRequest()
    } catch (error) {
        console.error("error",error);
    }
 
}
    
    
  return (
    <div className='about'>
       
      <ul>
        {data.map((item) =>(
            
<p  key={item.id}>
    <h1>{item.text}</h1>
    {item.title}
    <button onClick={() =>DeleteRequest(item.id)}>удалить</button>
</p>
        ))}
        
      </ul>

    </div>
  )
}

export default About
