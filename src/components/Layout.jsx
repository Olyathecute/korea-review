import React from 'react'
import styled from 'styled-components'
import { greenDark } from '../shared/styles'

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.div`
  padding: 15px;
  background-color: ${greenDark};
`
