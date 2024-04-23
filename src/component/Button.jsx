import classes from "../css/button.module.css";

export default function Button({
  backgroundColor,
  textColor,
  borderStyle,
  children,
}) {
  return (
    <div
      className={classes.button}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: borderStyle,
      }}
    >
      {children}
    </div>
  );
}
