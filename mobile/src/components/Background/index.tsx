import { ImageBackground } from 'react-native'
import React from 'react'

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles'

interface BackgroundProps {
  children: React.ReactNode
}

export const Background = ({children}: BackgroundProps) => {
  return (
    <ImageBackground
      source={backgroundImg} 
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}