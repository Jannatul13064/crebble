import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./global.css";

export const metadata = {
  title: "CREBBLE",
  description:
    "Crebble is a platform to show your projects.We support the Digital Designers such as Frontend Designers, UI/UX Designers ,Graphics Designer,Web Designers and Mobile application Designers,Game Developers and Data Science Engineer to live their existing projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
