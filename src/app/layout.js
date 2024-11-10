import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Jeb Dhili | Worst wallet in Nepal for Online payment services",
  description: "This is Description",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <NavBar />
            <SignedIn>{children}</SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
