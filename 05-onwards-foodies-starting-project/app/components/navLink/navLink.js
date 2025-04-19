'use client'

import Link from "next/link"
import classes from './navLink.module.css'
import { usePathname } from "next/navigation";

export function NavLink({href, text}) {
  const pathName = usePathname();

  return (
    <Link href={href} className={pathName.startsWith(href) ? classes.active: undefined}>{text}</Link>
  )
}