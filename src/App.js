import React, {lazy, Suspense} from 'react'
import {Spinner } from 'reactstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const NotFound = lazy(() => import('./Pages/NotFound'))
const Details = lazy(() => import('./Pages/Details'))
const SubmitPost = lazy(() => import('./Pages/SubmitPost'))




const App = () => {
  return (
    <Suspense fallback={
    <div style={{position: 'absolute', top: '50vh', left: '50vw'}}>
      <Spinner type='border' color='warning' size='lg' />
    </div>
    }>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact/' element={<Contact/>}/>
        <Route path='/submit/' element={<SubmitPost/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </Suspense>
  )
}

export default App