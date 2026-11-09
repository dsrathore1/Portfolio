import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/MotionEffects";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Digpal Singh Rathore | MLOps & Information Security",
    template: "%s | Digpal Singh Rathore",
  },
  description: "Personal portfolio of Digpal Singh Rathore — M.Tech student at SVNIT Surat, exploring MLOps, machine learning, information security and DevOps.",
  openGraph: {
    title: "Digpal Singh Rathore — Portfolio",
    description: "Building intelligent systems, one deployment at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
