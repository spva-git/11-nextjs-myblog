import Logo from "./logo";
import classes from "./main-navigation.module.css";
import Link from "next/link";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <Link href='/'>
          <Logo />
      </Link>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
