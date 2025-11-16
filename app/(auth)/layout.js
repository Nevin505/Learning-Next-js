import { deleteAuthSession } from "@/lib/auth";
import "../globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header id="auth-header">
          <p>Welcome Back !!</p>
          <form action={deleteAuthSession}>
            <button>Logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
