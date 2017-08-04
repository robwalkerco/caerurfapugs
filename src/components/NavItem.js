import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainLink = styled(Link)`
  margin: 0;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  background: no-repeat url(/static/pugbutton.gif);
  color: #000000;
  padding: 8px 7px 17px 41px;
  &:hover {
    color: #FF4848;
    background: no-repeat 2px 2px url(/static/pugbuttonsmall.gif);
    cursor: pointer;
  }
`

const FooterLink = styled(Link)`
  font-weight: bold;
  text-decoration: underline;
  color: #000000;
  padding: 0 21px 0px 4px;
  &:hover {
    color: #FF4848;
    cursor: pointer;
  }
`

export const MainNavItem = ({ to, children }) => (
    <MainLink to={to}>{children}</MainLink>
)

export const FooterNavItem = ({ to, children }) => (
    <FooterLink to={to}>{children}</FooterLink>
)
