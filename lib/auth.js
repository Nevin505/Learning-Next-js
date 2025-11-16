import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";
import db from "./db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});
export const luica = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    secure: process.env.NODE_ENV === "production",
  },
});
export const createAuthSession = async (userID) => {
  const session = await luica.createSession(userID, {});
  console.log("session", session);

  const sessionCookies = luica.createSessionCookie(session.id);
  console.log("thensessionCookies", sessionCookies);
  // return cookessessionCookies;
  (await cookies(sessionCookies)).set(
    sessionCookies.name,
    sessionCookies.value,
    sessionCookies.attributes
  );
};

export const verifyAuthSession = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(luica.sessionCookieName);
  console.log("sessionCookie", sessionCookie);

  if (!sessionCookie) {
    return { user: null, session: null };
  }
  if (!sessionCookie.value) {
    return { user: null, session: null };
  }
  const sessionResult = await luica.validateSession(sessionCookie.value);
  try {
    if (sessionResult.session && sessionResult.session.fresh) {
      const newSessionCookies = luica.createSessionCookie(
        sessionResult.session.id
      );
      (await cookies(newSessionCookies)).set(
        newSessionCookies.name,
        newSessionCookies.value,
        newSessionCookies.attributes
      );
    }
    if (!sessionResult.session) {
      const newSessionCookies = luica.createBlankSessionCookie();
      (await cookies(newSessionCookies)).set(
        newSessionCookies.name,
        newSessionCookies.value,
        newSessionCookies.attributes
      );
    }
  } catch (error) {}
  return sessionResult;
};

export const deleteAuthSession = async () => {
  "use server";
  const { session } = await verifyAuthSession();
  if (!session) {
    return;
  }
  await luica.invalidateSession(session.id);
  const newSessionCookies = luica.createBlankSessionCookie();
  (await cookies(newSessionCookies)).set(
    newSessionCookies.name,
    newSessionCookies.value,
    newSessionCookies.attributes
  );
  redirect("/");
};
