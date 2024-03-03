
import './App.scss'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPost from './components/SearchPost'
import PostDetals from './components/PostDetals'
function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<SearchPost/>}/>
       <Route path='/post' element={<PostDetals/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
