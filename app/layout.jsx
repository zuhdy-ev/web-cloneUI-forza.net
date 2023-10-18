import "../styles/globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Forza.net: The official website of the Forza franchise",
  description: "Forza.net",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shotcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
