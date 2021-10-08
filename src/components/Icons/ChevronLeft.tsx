import { Icon, IconProps } from '@chakra-ui/react'

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <path 
        d="M20 24L12 16L20 8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Icon>
  )
}