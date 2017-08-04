import React from 'react'
import styled from 'styled-components'
import { FooterNavItem } from './NavItem'

const NavBottom = () => (
  <div>
    <FooterNavItem to="/" class="nav1">Home</FooterNavItem>
    <FooterNavItem to="/our-pugs.php" class="nav2">Our Pugs</FooterNavItem>
    <FooterNavItem to="/pug-puppies-for-sale.php" class="nav3">Pug Puppies for sale</FooterNavItem>
    <FooterNavItem to="/stud.php" class="nav4">Stud</FooterNavItem>
    <FooterNavItem to="/looking-after-a-pug.php" class="nav5">Looking after a pug</FooterNavItem>
    <FooterNavItem to="/contact-us.php" class="nav6">Contact Us</FooterNavItem>
  </div>
)

export default NavBottom
