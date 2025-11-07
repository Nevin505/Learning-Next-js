'use client'
import { useFormStatus } from "react-dom";

export const FromSubmit = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log("the data", data, pending);

  return (
    <button type="submit" disabled={pending }> {pending ? "Submitting" : "Share Meal"}</button>
  );
};