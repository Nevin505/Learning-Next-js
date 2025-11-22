import Link from "next/link";
import buttonStyles from "./button.module.css";
const Button = (props) => {
  return props.href ? (
    <Link href={props.href} className={buttonStyles.btn}>
      {props.children}
    </Link>
  ) : (
    <button>{props.children}</button>
  );
};

export default Button;
