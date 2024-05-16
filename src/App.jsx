import { Routes,Route,  } from "react-router-dom"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Posts from "./pages/Posts"
const App = () => {
   return (
    <div>
      <div>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="posts" element={<Posts/>}/>
          </Route>
        </Routes>
      </div>
     
    </div>
  )
}

export default App
