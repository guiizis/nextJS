import Link from "next/link";
import logoImg from "../../assets/logo.png";
import classes from './mainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="food img" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li> <Link href="/meals">Meals</Link></li>
          <li> <Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  );
}