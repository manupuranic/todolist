import styles from "./Button.module.css";

const Button = (props) => {
  // const classes = styles.button + props.className;
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
