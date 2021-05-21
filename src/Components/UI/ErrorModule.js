import styles from "./ErrorModule.module.css";
import Button from "./Button";
import { Fragment } from "react";

const ErrorModule = (props) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.clickHandle}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>Invalid Input</h2>
          </header>
          <div className={styles.content}>
            <p>Please enter valid task.</p>
          </div>
          <footer className={styles.action}>
            <Button
              type="button"
              className={styles.button}
              onClick={props.clickHandle}>
              Okay
            </Button>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorModule;
