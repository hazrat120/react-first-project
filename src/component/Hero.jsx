import Button from "./Button";
import classes from "../css/hero.module.css";
import amazon from "../assets/images/amazon.png";
import facebook from "../assets/images/flipkart.png";
import shoe from "../assets/images/shoe_image.png";

export default function Hero() {
  return (
    <main className={`container ${classes.main}`}>
      <div className="hero-content">
        <h1 className={classes.heading}>YOUR FEET DESERVE THE BEST</h1>

        <p className={classes.heroP}>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className={classes.hero_button}>
          <Button backgroundColor="red" textColor="white" borderStyle="none">
            Shop Now
          </Button>
          <Button
            backgroundColor="none"
            textColor="gray"
            borderStyle="1px solid black"
          >
            Category
          </Button>
        </div>

        <div className={classes.social}>
          <p>Also Available On</p>
          <div className={classes.social_icon}>
            <img src={amazon} alt="amazon" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={shoe} alt="shoe img" />
      </div>
    </main>
  );
}
