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
    <MainNavItem to="/our-pugs">Our Pugs</MainNavItem>
    <MainNavItem to="/pug-puppies-for-sale">Puppies for sale</MainNavItem>
    <MainNavItem to="/stud">Stud</MainNavItem>
    <MainNavItem to="/looking-after-a-pug">Looking after a pug</MainNavItem>
    <MainNavItem to="/contact-us">Contact Us</MainNavItem>
  </NavWrapper>
)

export default Nav
