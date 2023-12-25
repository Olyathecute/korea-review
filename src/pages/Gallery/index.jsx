import React from 'react'
import styled from 'styled-components'

// grid element with different size (не по сетке, а с отступами)

function Gallery() {
  return (
    <Wrapper>
      <Grid></Grid>
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.div`
  height: 100vh;
  padding: 60px;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(100px, auto));
  grid-template-columns: repeat(3, 1fr);
`
