import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { ComponentPropsWithoutRef } from "react"
import { Text, Title } from "~ui/typography"

import Logo from '~/public/logo.svg'

export const AppNavbar = () => {
  return <div className="@container/navbar w-full h-12 border-gray-200 border-t-[1] border-b-[1]">
    <div className='grid grid-cols-12 h-full px-2 font-body'>
      <HeaderLogo />
      <Navbar />
      <HeaderCart />
    </div>
  </div>
}

/*
==========

Logo section

=========
*/

function HeaderLogo() {
  return <div className="h-full col-span-3">
    <Link className="flex h-full items-center pt-1.5" href="/">
      <Title className="sr-only" order={1}>Pedestal</Title>
      <Image className="ml-8" src={Logo} alt="logo" priority />
    </Link>

  </div>
}


/*
==========

Navbar

=========
*/

function Navbar() {
  return <nav className="w-full h-full col-span-7 self-center">
    <ul className="flex h-full items-center gap-x-0.5">
      {['Configure', 'TV Stands', 'Power', 'Accessories', 'Pro'].map(item => {
        return <NavbarItem href={item} key={item}>{item}</NavbarItem>
      })}
    </ul>
  </nav>
}


/*
==========

NavbarItem

=========
*/

type NavbarItemProps = ComponentPropsWithoutRef<'li'> & {
  href: string
  linkProps?: Omit<LinkProps, 'href'>
}

function NavbarItem(props: NavbarItemProps) {
  const { linkProps, href, children, ...restProps } = props

  return <li className="px-2.5 pt-1.5 pb-1 cursor-pointer rounded-xs hover:bg-black/10 transition-colors data-[choosed=true]:bg-black-5" {...restProps}>
    <Link href={href.toLowerCase()} {...linkProps}>
      <Text className="font-normal">{children}</Text>
    </Link>
  </li>
}


/*
==========

Cart section

=========
*/

function HeaderCart() {
  return <div className="col-span-2 justify-self-end self-center">
    <div className="flex gap-x-2">
      <Text className="px-2">Universe</Text>
      <Text className="px-2">Cart 0</Text>
    </div>

  </div>
}
