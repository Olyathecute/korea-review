import React from 'react'
import styled from 'styled-components'
import { Title } from '../../shared/styledComponents'
import { orange } from '../../shared/styles'

export default function About() {
  return (
    <Wrapper>
      <Title>
        TEXT TE<Span>X</Span>T TEXT
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 50vh;
`

const Span = styled.span`
  color: ${orange};c~X
`
