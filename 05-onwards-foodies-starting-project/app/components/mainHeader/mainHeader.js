import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../assets/logo.png";
import classes from './mainHeader.module.css';
import MainHeaderBackground from "../mainHeaderBackground/mainHeaderBackground";
import { NavLink } from "../navLink/navLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="food img" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li><NavLink href="/meals" text="Meals"/></li>
            <li><NavLink href="/community" text="Community"/></li>
          </ul>
        </nav>
      </header>
    </>
  );
}