import React from 'react'
import styled from 'styled-components'
import { Text } from '../shared/styledComponents'
import { defaultSettings } from '../shared/styles'

function Section({ img, text, settings = defaultSettings }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Image alt='picture' src={img} $settings={settings} />
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 40px;
`

const Image = styled.img`
  border-radius: 10px;
  width: ${(props) => props.$settings.width};
`
