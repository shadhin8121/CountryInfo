import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ContextState from "@/context/Context";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Country Info",
  description: "it's all about YouTube live streams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ContextState>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ContextState>
      </body>
    </html>
  );
}
