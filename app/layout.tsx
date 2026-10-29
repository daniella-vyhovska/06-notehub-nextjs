import "./globals.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <TanStackProvider>
          <Header />   {/* клієнтський */}
          <main>{children}</main>
        </TanStackProvider>

        <Footer />     {/* серверний */}
      </body>
    </html>
  );
}
