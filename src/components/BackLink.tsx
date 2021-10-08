import { Link, IconProps } from "@chakra-ui/react";
import { ChevronLeftIcon } from "./Icons";

interface BackLinkProps extends IconProps {
  href: string;
}

export function BackLink({ href, ...props}: BackLinkProps) {
  return (
    <Link href={href} pos='absolute' left='-8px'>
      <ChevronLeftIcon
        fill="none" 
        color="text-dark"
        {...props}
      />
    </Link>
  )
}