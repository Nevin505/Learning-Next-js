"use client";
import { authServer } from "@/actions/auth-action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

export default function AuthForm() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const [state, formAction, isPending] = useActionState(authServer.bind(null,mode), {});

  console.log("the reposnesssssssss", state);
  console.log("the mode", searchParams.get("mode"));

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {state?.errors && (
        <ul className="form-errors">
          {Object.keys(state.errors).map((errorKey) => {
            return <li>{state.errors[errorKey]}</li>;
          })}
        </ul>
      )}
      <p>
        <button type="submit">
          {isPending
            ? "Creating...."
            : mode == "login"
            ? "Login"
            : "Create Account"}
        </button>
      </p>
      <p>
        {mode == "login" ? (
          <Link href="/?mode=signup">Create a New Account.</Link>
        ) : (
          <Link href="/?mode=login">Login with existing account</Link>
        )}
      </p>
    </form>
  );
}
