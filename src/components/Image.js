import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Title = styled.p`
  font-weight: bold;
  color: #FF0000;
`

const Image = ({ src, alt, children }) => (
  <Container>
    <img src={src} alt={alt} />
    {children}
  </Container>
)

export default Image
