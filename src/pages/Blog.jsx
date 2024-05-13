
import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
const Blog = () => {

    const [item,setItem] = useState([])
        const [ inputTitle,setInputTitle] = useState('')
        const [inputText,setInputText] = useState('')


useEffect(() =>{
    getRequest()
},[])

const getRequest = async() =>{
 const response  = await axios.get("http://localhost:8000/todos")
 setItem(response.data)
}

    const postRequest = async(event) =>{
                try {
                    if (inputText !== "" && inputTitle !== "") {
                                 event.preventDefault()
            const todos = {
             title:inputTitle,
             text:inputText,
             status:false
             
            }
            await axios.post(`http://localhost:8000/todos`,todos)
            getRequest()
            setInputTitle('')
            setInputText('')
                    }
           
        } catch (error) {
            console.error("error",error);
        }
    }
  return (
    
    <div className="blog">
      <h1>создание поста</h1>


      
      <form onSubmit={postRequest} style={{display:'flex',flexDirection:'column'}}>
        <input
      placeholder='заголовок'
      value={inputText}
      onChange={e =>{
       setInputText( e.target.value)
      }}
      />
      <textarea 
      value={inputTitle}
      onChange={e =>{
        setInputTitle(e.target.value)
      }}
      rows="8" cols="50"></textarea>
<button  disabled={inputTitle ==="" || inputText==="" }>отправить</button>
      </form>
      
    </div>
  )
}

export default Blog
