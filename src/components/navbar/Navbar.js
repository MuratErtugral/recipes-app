import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
   
    <Nav>
    <Logo onClick={()=>setIsOpen(false)} to="/home">
      <i>{"<Clarusway>"}</i>
      <span>recipe</span>
    </Logo>
    <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
    </Hamburger>
    <Menu osman={isOpen}>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/about">About</MenuLink>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/github">GitHub</MenuLink>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} 
        onMouseUp={()=>sessionStorage.clear()} to="/">Logout</MenuLink>
     </Menu>
    </Nav>
  )
}

export default Navbar