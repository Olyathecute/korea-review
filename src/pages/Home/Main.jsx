import React from 'react'
import styled, { css } from 'styled-components'
import { greenSemi, size } from '../../shared/styles'
import { Title } from '../../shared/styledComponents'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <Wrapper>
      <div>
        <OpacityTitleTop>SOUTH</OpacityTitleTop>
        <OpacityTitleBottom>KOREA</OpacityTitleBottom>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.3, duration: 1.7 }}
        >
          <TitleTop>SOUTH</TitleTop>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <TitleBottom>KOREA</TitleBottom>
        </motion.div>
      </div>
      <Image alt='palace' src='/palace.png' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  background-color: ${greenSemi};
  border-radius: 20px;
  height: 60vh;
  overflow: hidden;
`

const TitleTop = styled(Title)`
  position: absolute;
  left: 15vw;
  top: 8vh;

  @media (max-width: ${size.xl}) {
    left: 110px;
  }

  @media (max-width: ${size.l}) {
    left: 120px;
  }

  @media (max-width: ${size.m}) {
    left: 100px;
    top: 100px;
  }

  @media (max-width: ${size.sm}) {
    left: 60px;
  }

  @media (max-width: ${size.s}) {
    left: 25px;
  }
`

const TitleBottom = styled(Title)`
  position: absolute;
  left: 25vw;
  top: 28vh;

  @media (max-width: ${size.xl}) {
    left: 200px;
  }

  @media (max-width: ${size.l}) {
    left: 170px;
    top: 220px;
  }

  @media (max-width: ${size.m}) {
    left: 140px;
    top: 200px;
  }

  @media (max-width: ${size.sm}) {
    left: 100px;
  }

  @media (max-width: ${size.s}) {
    left: 60px;
  }
`

const opacity = css`
  opacity: 0.1;
  font-size: 600px;

  @media (max-width: ${size.l}) {
    font-size: 400px;
  }

  @media (max-width: ${size.m}) {
    display: none;
  }
`

const OpacityTitleTop = styled(Title)`
  position: absolute;
  left: 50px;
  top: -100px;

  @media (max-width: ${size.l}) {
    left: 20px;
    top: -80px;
  }

  ${opacity}
`

const OpacityTitleBottom = styled(Title)`
  position: absolute;
  left: 500px;
  top: 150px;

  @media (max-width: ${size.l}) {
    left: 200px;
    top: 180px;
  }

  ${opacity}
`

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: -240px;
  max-height: 850px;
  z-index: 10;

  @media (max-width: ${size.l}) {
    right: -50px;
    bottom: -250px;
  }

  @media (max-width: ${size.m}) {
    right: -100px;
    bottom: -300px;
  }

  @media (max-width: ${size.s}) {
    right: -200px;
    bottom: -300px;
  }
`
