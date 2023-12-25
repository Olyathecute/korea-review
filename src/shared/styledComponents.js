import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { size, white } from './styles'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${white};
  font-size: 20px;
`

export const Title = styled.p`
  font-family: 'Imbue', serif;
  font-size: 15vw;
  font-weight: lighter;
  color: ${white};

  @media (max-width: ${size.xl}) {
    font-size: 180px;
  }

  @media (max-width: ${size.l}) {
    font-size: 150px;
  }

  @media (max-width: ${size.m}) {
    font-size: 115px;
  }

  @media (max-width: ${size.s}) {
    font-size: 100px;
  }
`

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 26px;
  font-weight: lighter;
  color: ${white};
`
