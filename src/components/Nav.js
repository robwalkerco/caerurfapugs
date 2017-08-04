import React from 'react'
import styled from 'styled-components'
import { MainNavItem } from './NavItem'

const NavWrapper = styled.div`
  height: 40px;
  padding: 20px 0 0 80px;
`

const Nav = () => (
  <NavWrapper>
    <MainNavItem to="/">Home</MainNavItem>
    <MainNavItem to="/our-pugs.php">Our Pugs</MainNavItem>
    <MainNavItem to="/pug-puppies-for-sale.php">Puppies for sale</MainNavItem>
    <MainNavItem to="/stud.php">Stud</MainNavItem>
    <MainNavItem to="/looking-after-a-pug.php">Looking after a pug</MainNavItem>
    <MainNavItem to="/contact-us.php">Contact Us</MainNavItem>
  </NavWrapper>
)

export default Nav
