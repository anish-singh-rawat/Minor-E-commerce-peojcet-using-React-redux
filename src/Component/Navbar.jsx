import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import Home from '../Page/Home'

export default function Navbar() {
    const item =  useSelector((state)=>state.cart)
    return (
        <>
            <div className='parentNavbar'>
            <span>redux project</span>
                <div>
                    <Link className='navLink' to={'/'}> Home </Link>
                    <Link className='navLink' to={'/cart'}> Card </Link>
                    <span className='item'>  items : {item.length} </span>
                </div>
            </div>
        </>
    )
}