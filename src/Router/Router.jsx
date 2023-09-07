import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import Card from '../Page/Card'

export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Card/>}/>
    </Routes>
    </>
    )
}
