import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  border: #FF0000 2px solid;
`

const Title = styled.p`
  font-weight: bold;
  color: #FF0000;
`

const Alert = ({ title, children }) => (
  <Border>
    <Title>{title}</Title>
    {children}
  </Border>
)

export default Alert
