import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FileText,Menu,X} from 'lucide-react'
function Header() {
    const[isScrolled,setIsScrolled] = useState(false)
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const isAuthenticated = false
    const user={null:'Alex',email:'alex@timetoprogram.com'}
  return (
    <div>
        Header
    </div>
  )
}

export default Header