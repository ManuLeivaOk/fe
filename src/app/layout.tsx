import { inter } from "@/fonts/fonts";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/NavBar";

export const metadata = {
  title: "Ruta Nueve Sur",
  description: "Portal de noticias del sur de Córdoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
