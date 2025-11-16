"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, isUserAccountPresent } from "@/lib/user";
import { redirect } from "next/navigation";

export const submitAuthForm = async (prevState, formData) => {
  console.log("the prev state", prevState);

  const email = formData.get("email");
  let password = formData.get("password");
  let error = {};
  if (!email.trim() || !email.includes("@")) {
    error = {
      ...error,
      email: !email ? "Email Cannot be Empty" : "Invalid email",
    };
  }
  if (!password.trim() || password.trim().length < 8) {
    error = {
      ...error,
      password: !password.trim()
        ? "Passowrd Cannot be Empty"
        : "Password Should be greater than 8 Letters",
    };
  }
  if (Object.keys(error).length > 0) {
    return { errors: error };
  }
  password = hashUserPassword(password);
  try {
    const id = createUser(email, password);
    console.log("The response", id);
    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code == "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "Alreday registered Email" } };
    }
    console.log("the error message", error);
    throw error;
  }
};

export const loginAuthForm = async (prevState, formData) => {
  console.log("the formData", formData);
  const email = formData.get("email");
  const password = formData.get("password");
  const isExistingUser = isUserAccountPresent(email);
  console.log("isExistingUser", isExistingUser);

  if (!isExistingUser) {
    return { errors: { email: "Email or Passowrd not Correct" } };
  }
  const isPasswordValid = verifyPassword(isExistingUser.password, password);
  console.log("isPasswordValid",isPasswordValid);
  
  if (!isPasswordValid) {
    return { errors: { email: "Email or Passowrd not Correct" } };
  }
  await createAuthSession(isExistingUser.id);
  redirect("/training");
};

export const authServer = (mode, prevState, formData) => {
  return mode == "login"
    ? loginAuthForm(prevState, formData)
    : submitAuthForm(prevState, formData);
};
