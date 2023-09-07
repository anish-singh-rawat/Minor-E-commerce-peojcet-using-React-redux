import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './Page/Card'
import Home from './Page/Home'
import Navbar from './Component/Navbar'

export default function ReduxApp() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/card' element={<Card />} />
            </Routes>
        </>
    )
}
