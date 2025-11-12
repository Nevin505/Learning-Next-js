"use client";
import { useFormStatus } from "react-dom";

const Button = ({ children }) => {
  const status = useFormStatus();
  console.log("thestatuss", status);

  return <button>{status?.pending ? "SUbmitting" : children}</button>;
};
export default Button;
