import image from "../assets/images/brand_logo.png";
import Button from "./Button";
import classes from "../css/nav.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={`container ${classes.nav}`}>
        <div>
          <img src={image} alt="brand-logo" />
        </div>
        <ul className={classes.nav_menu}>
          <li className={classes.li}>menu</li>
          <li className={classes.li}>loaction</li>
          <li className={classes.li}>about</li>
          <li className={classes.li}>contact</li>
        </ul>

        <Button backgroundColor="red" textColor="white" borderStyle="none">
          Login
        </Button>
      </nav>
    </>
  );
}
