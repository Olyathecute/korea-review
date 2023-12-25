import React from 'react'
import styled from 'styled-components'
import Section from '../../components/Section'

const data = [
  {
    title: 'qweq',
    text: 'weqweqwdmsjkf jnf jksz  jfkas dx',
    img: '/sections/road.jpg',
    settings: {
      width: '20rem',
    },
  },
  {
    title: 'qweq',
    text: 'weqweqwdmsjkf jnf jksz  jfkas dx',
    img: '/sections/road.jpg',
  },
]

function Info() {
  return (
    <Wrapper>
      {data.map(({ title, text, img, settings }) => (
        <Section key={title} title={title} text={text} img={img} settings={settings} />
      ))}
    </Wrapper>
  )
}

export default Info

const Wrapper = styled.div`
  height: 120vh;
  padding: 40px;
`
