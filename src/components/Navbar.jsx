import React from 'react'
import { PiAlienLight } from 'react-icons/pi'
import styled from 'styled-components'
import { StyledLink } from '../shared/styledComponents'
import { size } from '../shared/styles'

function Navbar() {
  return (
    <Header>
      <Logo>
        <StyledLink to='/'>
          <PiAlienLight size={25} />
        </StyledLink>
      </Logo>
      <Nav>
        <StyledLink to='/gallery'>Gallery</StyledLink>
        <StyledLink to='/info'>Info</StyledLink>
      </Nav>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
`

const Logo = styled.div`
  position: absolute;
  left: 40px;
  top: 38px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: ${size.m}) {
    gap: 50px;
  }

  @media (max-width: ${size.s}) {
    gap: 30px;
  }
`
