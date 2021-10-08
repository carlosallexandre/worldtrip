import { Image, ImageProps } from '@chakra-ui/react'

import logo from '../assets/logo.svg'

type LogoProps = Omit<ImageProps, 'src'>

export function Logo(props: LogoProps) {
  return (
    <Image src={logo.src} alt="Logo" {...props} />
  )
}